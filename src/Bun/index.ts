const notFoundOpts = { status: 404 }, idPathStart = 'id/', pathLen = 'id/'.length, res = Response.json;

Bun.serve({
    fetch(req): Response | Promise<Response> {
        const pathIndex = req.url.indexOf('/', 12) + 1,
            queryIndex = req.url.indexOf('?', pathIndex),
            path = queryIndex === -1 
                ? req.url.substring(pathIndex)
                : req.url.substring(pathIndex, queryIndex);

        switch (path) {
            case '':
                if (req.method === 'GET') return new Response('Hi');
                break;
            case 'api/hi': 
                if (req.method === 'GET') return new Response('Welcome');
                break;
            case 'api/json':
                if (req.method === 'POST') return req.json().then(res);
                break;
            default:
                if (path.indexOf(idPathStart) === 0) 
                    return new Response(
                        path.substring(pathLen) + ' ' + new URLSearchParams(
                            req.url.substring(queryIndex + 1)
                        ).get('name')
                    );
                break;
        }

        return new Response(null, notFoundOpts);
    }
});

