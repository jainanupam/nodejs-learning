var fs = require('fs');
var ws = fs.createWriteStream('out.txt');
var data = 'Hello World added to file';
ws.write(data, 'UTF8');
ws.end();
ws.on('finish', function(chunk){
  console.log("Write completed");
});
