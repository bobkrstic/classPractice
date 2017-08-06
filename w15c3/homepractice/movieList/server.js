
// this is always the sencond step
// after npm installing the packages
// you come to this file and require all of them. 
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var mysql = require('mysql');

// next step is creating our server
var app = express();
// since we are going to use bodyParser
app.use(bodyParser.urlencoded({
	extended: false
}))
// using methodoverride as well
app.use(methodOverride('_method'));
// then using handlebars engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// then creating the connection to the port
var port = 3000;
app.listen(port);

// creating our mysql connection
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'movie_planner_DB'
});

connection.connect(function(err){
	if(err)throw err;
	console.log('Connected as id: ' + connection.threadId);
	
});





// this will post the information to the page
app.get('/', function(req, res){
	connection.query('SELECT * FROM movies;', function(err, data) {
		// now render the information
		// send to the front
		res.render('index', {movies: data});
	})
})



// post will have a route /create
app.post('/create', function(req,res){
	// when this route is hit
	// we will create a query to our data base
	// and will add the data to the database
	connection.query('INSERT INTO movies (movie) VALUES (?);', 
		[req.body.movie], function(err, result) {
			if(err)throw err;
			// and once you submit data, redirect to the main page
			res.redirect('/');
		})
})


app.put('/update', function(req,res){
	connection.query('UPDATE movies SET movie = ? WHERE id = ?;',
		[req.body.movie, req.body.id], function(err,results) {
			if(err)throw err;
			res.redirect('/');
		})
})


app.delete('/delete', function(req,res){
	connection.query("DELETE FROM movies WHERE id = ?;", [req.body.id],
		function(err,results){
			if(err)throw err;
			res.redirect('/');
		})
})























