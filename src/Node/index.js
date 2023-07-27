require('http').createServer((req, res) => {
    setImmediate(handle, req, res);
}).listen(3000);

const jsonHeaders = { 'Content-Type': 'application/json' };
const dynamicPath = '/id/', dynamicPathLen = dynamicPath.length;

/**
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res 
 */
function handle(req, res) {
    const queryIndex = req.url.indexOf('?', 1),
        path = queryIndex === -1 ? req.url : req.url.slice(0, queryIndex);

    switch (path) {
        case '/': 
            if (req.method === 'GET') 
                return res.end('Hi');
            break;
        case '/json':
            if (req.method === 'POST') {
                let body = '';
                req.on('data', d => { body += d; });
                return req.on('end', () => 
                    res
                        .writeHead(200, jsonHeaders)
                        .end(JSON.stringify(JSON.parse(body)))
                );
            }
            break;
        default:
            if (path.startsWith(dynamicPath)) 
                return res.end(
                   path.slice(dynamicPathLen) + ' ' + 
                   new URLSearchParams(
                       req.url.slice(queryIndex + 1)
                   ).get('name')
                );
            break;
    }

    res.statusCode = 404;
    res.end();
}
