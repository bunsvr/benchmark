const notFoundOpts = { status: 404 }, jsonOpts = { headers: {'Content-Type': 'application/json'} }, idPathStart = '/id/', pathLen = idPathStart.length;
function res(json: any) {
    return new Response(JSON.stringify(json), jsonOpts);
}

Bun.serve({
    fetch(req): Response | Promise<Response> {
        const { url, method } = req, 
            pathIndex = url.indexOf('/', 12),
            queryIndex = url.indexOf('?', pathIndex + 1),
            path = queryIndex === -1 
                ? url.substring(pathIndex)
                : url.substring(pathIndex, queryIndex);

        switch (path) {
            case '/':
                if (method === 'GET') return new Response('Hi');
                break;
            case '/json':
                if (method === 'POST') return req.json().then(res);
                break;
            default:
                if (path.startsWith(idPathStart)) 
                    return new Response(
                        path.substring(pathLen) + ' ' + new URLSearchParams(
                            url.substring(queryIndex + 1)
                        ).get('name')
                    );
                break;
        }

        return new Response(null, notFoundOpts);
    }
});

