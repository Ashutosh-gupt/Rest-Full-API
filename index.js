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

    // getting the method of http request
    let methods = req.method.toLocaleLowerCase();

    // parsing the header as an object
    let headers = req.headers;

    // geting the query string as an object
    let querystringobject = parseURL.query;

    //log the Request path
    console.log('Request received with this headers', headers);
});

// start the server, and have it listen in port 3000;
server.listen(3000, function() {
    console.log('The server is listening on port 3000');
});