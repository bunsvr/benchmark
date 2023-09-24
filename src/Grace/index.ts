import { createGrace, createRoute, t } from "@grace-js/grace";

createGrace()
    .registerRoute(createRoute({
        method: 'GET',
        path: '/',
        schema: {
            response: {
                200: t.String()
            }
        },
        handler: async () => {
            return {
                code: 200,
                body: 'Hi'
            }
        },
    }))
    .registerRoute(createRoute({
        method: 'GET',
        path: '/id/:id',
        schema: {
            response: {
                200: t.String()
            },
            params: t.Object({
                id: t.Any()
            }),
            query: t.Object({
                name: t.Any()
            })
        },
        handler: async c => {
            return {
                code: 200,
                body: c.params.id + ' ' + c.query.name
            }
        },
    }))
    .registerRoute(createRoute({
        method: 'GET',
        path: '/api/hi',
        schema: {
            response: {
                200: t.String()
            }
        },
        handler: async () => {
            return {
                code: 200,
                body: 'Welcome'
            }
        },
    }))
    .registerRoute(createRoute({
        method: 'POST',
        path: '/api/json',
        schema: {
            response: {
                200: t.Any()
            }
        },
        handler: async c => {
            return {
                code: 200,
                body: c.body
            }
        },
    }))
    .registerRoute(createRoute({
        method: 'GET',
        path: '/a/b',
        schema: {
            response: {
                404: t.String()
            }
        },
        handler: async () => {
            return {
                code: 404,
                body: 'Not Found'
            }
        },
    }))
    .listen(3000, () => { });
