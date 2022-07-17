/*
Primary File for the API
*/

// Dependencies

const http = require('http');
const { parse } = require('path');
const url = require('url');

// server respond to all request to a string
let server = http.createServer(function(req, res) {
    // get the url and parse it
    let parseURL = url.parse(req.url, true);

    // get the path
    let path = parseURL.pathname;
    let trimmedPath = path.replace(/^\/+|\/+$/g, '');
    // Send the response
    res.end('hello world\n');

    //log the Request path
    console.log('Request recived on path : ' + trimmedPath);
});

// start the server, and have it listen in port 3000;
server.listen(3000, function() {
    console.log('The server is listening on port 3000');
});