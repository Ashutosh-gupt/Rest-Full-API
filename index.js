/*
Primary File for the API
*/

// Dependencies

const http = require('http');

// server respond to all request to a string
let server = http.createServer(function(req, res) {
    res.end('hello world /n');
});

// start the server, and have it listen in port 3000;
server.listen(3000, function() {
    console.log('The server is listening on port 3000');
});