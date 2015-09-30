var http = require('http');
var app = require('./routing.js');


var server = http.createServer(app.handleRequests);
var port = 3000;

server.listen(port);
console.log('Listening on port', port);

