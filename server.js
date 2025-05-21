const http = require('http');
const formRoute = require('./routes/form');
const addNoteRoute = require('./routes/addNote');
const getNotesRoute = require('./routes/getNotes');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/' && method === 'GET') {
        return formRoute(req, res);
    }

    if (url === '/add' && method === 'POST') {
        return addNoteRoute(req, res);
    }

    if (url === '/notes' && method === 'GET') {
        return getNotesRoute(req, res);
    }

    res.statusCode = 404;
    res.end('404, sorry');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
