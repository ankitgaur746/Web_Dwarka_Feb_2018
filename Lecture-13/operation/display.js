/**
 * Created by aayusharora on 4/8/18.
 */
const fs = require('fs');

function readFile(callback){
    // To write TodoList into File
    fs.readFile('./abc', function(err, data){
        if (err) throw err;
        callback(data);
    })
}

module.exports = {
    readFile
};