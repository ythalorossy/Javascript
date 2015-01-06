var fs = require('fs');
var file = process.argv[2];
var content = fs.readFile(file, 'utf-8', function(err, data){
    if (!err)
        var lines = data.toString().split('\n').length - 1;

        console.log(lines);

});