var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
//var PORT = process.env.PORT || 8080;
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd/api+json" }));

app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
});

var me = [{
	routeName: "bob",
	name: "Bob",
	surname: "Krstic"
}];


app.get("/", function(req, res){

	res.sendFile(path.join(__dirname, "basicHtml.html"));

});


app.get("/all", function(req, res){

	res.json(me);

});


app.get("/api/", function(req, res){
	//for(var i = 0; i < res.length; i++) {
		return res.json(me[0]);
	//}
	
});

app.post("/api/new", function(req, res) {

	var newMe = req.body;
	console.log(newMe);

	me.push(newMe);

	res.json(newMe);

});

