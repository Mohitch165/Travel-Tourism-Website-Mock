const express = require('express');
const app = express();
var engine = require('consolidate');

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

app.get("/", function(req, res){
	res.render("index.html");
} );

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("server started sucessfully");
});