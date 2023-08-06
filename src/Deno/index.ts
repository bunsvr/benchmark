const jsonHeaders = { headers: {'Content-Type': 'application/json'} };
const notFound = { status: 404 };
function toResponse(json: any) {
    return new Response(JSON.stringify(json), jsonHeaders);
}

const dynamicPath = 'id/', dynamicPathLen = dynamicPath.length;
function handle(req: Request) {
    const pathIndex = req.url.indexOf('/', 12) + 1,
        queryIndex = req.url.indexOf('?', pathIndex),
        path = queryIndex === -1 
            ? req.url.slice(pathIndex)
            : req.url.slice(pathIndex, queryIndex);

    switch (path) {
        case '':
            if (req.method === 'GET') 
                return new Response('Hi');
            break;
        case 'api/hi': 
            if (req.method === 'GET') return new Response('Welcome');
            break;
        case 'api/json':
            if (req.method === 'POST')
                return req.json().then(toResponse);
            break;
        default:
            if (path.startsWith(dynamicPath)) 
                return new Response(
                    path.slice(dynamicPathLen) + ' ' + new URLSearchParams(
                        req.url.slice(queryIndex + 1)
                    ).get('name')
                );
            break;
    }

    return new Response(null, notFound);
};

// @ts-ignore
Deno.serve({ port: 3000 }, handle);
