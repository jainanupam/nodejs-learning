var fs = require('fs');
var rs = fs.createReadStream('mynotes.txt');
var data = '';
rs.setEncoding('UTF8');
rs.on('data', function(chunk){
  data += chunk;
});
rs.on('end', function(){
  console.log(data);
})
