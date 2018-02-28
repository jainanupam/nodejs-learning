var http = require('http');
var url = require('url');

function startserver(route, handle) {
	function onRequest(req, res){
		var reviewData = "";
		var pathname = url.parse(req.url).pathname;
		console.log("Request received for " + pathname);
		req.setEncoding("UTF8");
		req.addListener("data", function(chunk){
			reviewData += chunk;
		});
		req.addListener("end", function(chunk){
			route(pathname, handle, res, reviewData);
		});
		
		
	}
	var server = http.createServer(onRequest).listen(8888);
	console.log("Server started on port 8888");
}


exports.startserver = startserver;