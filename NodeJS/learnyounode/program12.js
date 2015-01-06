var fs   = require('fs');
var map  = require('through2-map'); 
var http = require('http');

uc = map(function(chunk) {
    return chunk.toString().toUpperCase();
});

server = http.createServer(function (request, response) {
    
    response.writeHead(200, { 'content-type': 'text/plain' })

    if (request.method == 'POST') {
        request.pipe(uc).pipe(response);
    }
    
});

server.listen(Number(process.argv[2]));