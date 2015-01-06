
require('http').createServer(function (req, res) {
    
    res.writeHead(200, { 'content-type': 'text/plain' })

    require('fs').createReadStream(process.argv[3], {}).pipe(res);

}).listen(Number(process.argv[2]))