var fs = require('fs');
var path = require('path');

module.exports = function(directoryName, fileExtension, callback) {
    fs.readdir(directoryName, function(err, list) {
        if (err)
            return callback(err);

        list = list.filter(function(file){
            return path.extname(file) === '.' + fileExtension
        });

        callback(null, list);
    });
};