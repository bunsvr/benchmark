const express = require('express');
const json = { 'Content-Type': 'application/json' };

express()
    .get('/', (_, res) => res.end('Hi'))
    .get('/api/hi', (_, res) => res.end('Welcome'))
    .get('/id/:id', (req, res) => res.end(req.params.id + ' ' + req.query.name))
    .post('/api/json', express.json(), (req, res) => {
        res.writeHead(200, json);
        res.end(JSON.stringify(req.body));
    })
    .listen(3000);
