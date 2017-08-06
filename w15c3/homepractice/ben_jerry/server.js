var express = require('express');
var exphbs = require('express-handlebars');

// set up express server
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var port = 3000;
app.listen(port);

// this will be passed to the front as a variable
var icecreams = [
	{name: "vanilla", price: 10, awesomness: 3},
	{name: "chocolate", price: 4, awesomness: 7},
	{name: "banana", price: 3, awesomness: 4}
]


// here we are telling the code to send the "icecream" view to 
// the main.handlebars. 
// also, we are going to send the "banana" value to the "name" variable
// sending "icecreams" value to the "ics" variable. 
app.get('/', function(req,res){
	res.render('icecream', {ics: icecreams});
});

// this will send just one flavor to the front. 
app.get('/:name', function(req,res){
	for(var i=0; i<icecreams.length; i++) {
		if(icecreams[i].name == req.params.name) {

			// render icecreamflavor page and send icecream[i] object
			// to the variable 
			return res.render('icecreamflavor', icecreams[i]);
		}
	}
});