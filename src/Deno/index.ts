const jsonHeaders = { headers: {'Content-Type': 'application/json'} };
const notFound = { status: 404 };
function toResponse(json: any) {
    return new Response(JSON.stringify(json), jsonHeaders);
}

// @ts-nocheck
const dynamicPath = '/id/', dynamicPathLen = dynamicPath.length;
Deno.serve({ port: 3000 }, req => {
    const url = req.url, 
        pathIndex = url.indexOf('/', 12),
        queryIndex = url.indexOf('?', pathIndex + 1),
        path = queryIndex === -1 
            ? url.substring(pathIndex)
            : url.substring(pathIndex, queryIndex),
        method = req.method;

    switch (path) {
        case '/':
            if (method === 'GET') 
                return new Response('Hi');
            break;
        case '/json':
            if (method === 'POST')
                return req.json().then(toResponse);
            break;
        default:
            if (path.startsWith(dynamicPath)) 
                return new Response(
                    path.substring(dynamicPathLen) + ' ' + new URLSearchParams(
                        url.substring(queryIndex + 1)
                    ).get('name')
                );
            break;
    }

    return new Response(null, notFound);
});
