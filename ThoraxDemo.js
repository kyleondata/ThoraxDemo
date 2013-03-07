var express = require('express');
var app = express.createServer();

// Setup the public dir to serve up static content
app.configure(function(){
	app.use(express.static(__dirname + '/public'));	
});
 
app.get('/', function(req, res){
	res.setHeader('Content-Type', 'text/plain');
	res.send('Hello World!')
});

app.listen(8080);
console.log('listening on port 8080...')