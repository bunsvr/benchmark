require('http').createServer((req, res) => {
    setImmediate(handle, req, res);
}).listen(3000);

const jsonHeaders = { 'Content-Type': 'application/json' };

const dynamicPath = '/id/', dynamicPathLen = dynamicPath.length;
function handle(req, res) {
    const url = req.url, 
        queryIndex = url.indexOf('?', 1),
        path = queryIndex === -1 ? url : url.slice(0, queryIndex),
        method = req.method;

    switch (path) {
        case '/': 
            if (method === 'GET') 
                return res.end('Hi');
            break;
        case '/json':
            if (method === 'POST') {
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
                       url.slice(queryIndex + 1)
                   ).get('name')
                );
            break;
    }

    res.statusCode = 404;
    res.end();
}
