var querystring = require("querystring");

function home(response) {
	console.log("Executing home function");
	var htmlfile= '<HTML>' + 
	'<head>' +
	'<meta http-equiv="Content-type" content="text/html;charset=UTF-8" />'+
	'</head>' +
	'<body>'+
	'<form action="/review" method="post">'+
	'<textarea name="text" rows="20" cols"60"></textarea>'+
	'<input type="submit" value="Submit Text" />'+
	'</form>'+
	'</body>'+
	'</HTML>'
	response.writeHead(200, {"Content-type":"text/html"});
	response.write(htmlfile);
	response.end();
}

function review(response, reviewData) {
	console.log("Executing review function");
	response.writeHead(200, {"Content-type":"text/plain"});
	response.write("Your review is: " + querystring.parse(reviewData).text);
	response.end();
}

exports.home = home;
exports.review = review;