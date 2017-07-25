// one database
// two tables

// the task is to search through both tables and compare them 
// against each other. 

var mysql = require("mysql");
var inquirer = require("inquirer");

// connection to the mysql database
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	database: "TopSongsDB"
})

connection.connect(function(err) {
	if(err) throw err;
	runSearch();
})

var runSearch = function() {
	//console.log("Connection successful!");

	inquirer.prompt({
		name: "action",
		type: "rawlist",
		message: "What would you like to do?",
		choices: [
			"Find songs by artist",
			"Find all artists who appear more than once",
			"Find data within a specific range",
			"Search for a specific song",
			"Find artists with a top song and top album in the same year"
		]
	}).then(function(answer){

		switch(answer.action) {
			case "Find songs by artist":
				artistSearch();
			break;

			case "Find all artists who appear more than once":
				multiSearch();
			break;

			case "Find data within a specific range":
				rangeSearch();
			break;

			case "Search for a specific song":
				songSearch();
			break;

			case "Find artists with a top song and top album in the same year":
				songAndAlbumSearch();
			break;

		}
	})
}


var artistSearch = function() {
	// ask the user what artist they want to search
	inquirer.prompt({
		name: "artist",
		type: "input",
		message: "What artist would you like to search for?"
	}).then(function(answer) {
		// then make a query that is going to search for any song
		// that matches that artist name. 
		var query = "SELECT position, song, year FROM top5000 WHERE ?";
		connection.query(query,{artist:answer.artist}, function(err,res){
			// since there may be multiple entries
			// we will run the for loop to check and print
			for (var i=0; i<res.length; i++){
				console.log("Position: " + res[i].position + "\nSong: " + res[i].song + "\nYear: " + res[i].year + "\n-------------------------------");
			}
			runSearch();
		})
	})
}



// when artist appear in the database more than once
var multiSearch = function() {
	// we will make so that user can choose how many songs of a certain artist are on the list
	inquirer.prompt({
		name: "number",
		type: "input",
		message: "How many songs must the artist have on the list?"
	}).then(function(answer){
		query = 'SELECT artist FROM top5000 GROUP by artist HAVING count(*) > ' + answer.number;
		connection.query(query, function(err,res){
			for(var i=0; i<res.length; i++){
				console.log(res[i].artist);
			}
			runSearch();
		})
	})

}


// this function will have two inquirer prompts, one that asks for the start number
// and one that asks for the end number. 
var rangeSearch = function() {
	inquirer.prompt([

	{
		name: "start",
		type: "input",
		message: "Enter starting position: ",
		validate: function(value){
			if(isNaN(value)==false){
				return true;
			} else {
				return false;
			}
		}
	},
	{
		name: "end",
		type: "input",
		message: "Enter ending position: ",
		validate: function(value) {
			if(isNaN(value)==false){
				return true;
			} else {
				return false;
			}
		}
	}

	]).then(function(answer){
		// now create mysql query and then loop through the response that
		// we get
		var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
		connection.query(query,[answer.start,answer.end], function(err,res){
			
			for(var i=0; i<res.length; i++){
				console.log(
				"Position: " + res[i].position 
				+ "\nSong: " + res[i].song 
				+ "\nArtist: " + res[i].artist
				+ "\nYear: " + res[i].year 
				+ "\n-------------------------------");
			}
			runSearch();
		})	
	})
}


var songSearch = function() {
	inquirer.prompt([
	{
		name: "song",
		type: "input",
		message: "What song would you like to look for?"
	}
	]).then(function(answer){
		var query = "SELECT * FROM top5000 WHERE ?";
		connection.query(query,{song:answer.song}, function(err,res){
			console.log(
					"Position: " + res[0].position
					+ "\nArtist: " + res[0].artist
					+ "\nYear: " + res[0].year
					+ "\n----------------------------"
					);
			runSearch();
		})
	})
}


// now comparing two different databases, two tables
// and trying to compare it and find top song and top artist in the same year
// whenever is a top song on the top album then combine. 
var songAndAlbumSearch = function() {
	inquirer.prompt([
		{
			// looking for the artist since that is what both tables have. 
			name: "artist",
			type: "input",
			message: "What artist would you like to look for?"
		}
	]).then(function(answer){
		var query = "SELECT TopAlbums.year, TopAlbums.position, TopAlbums.album, top5000.song, top5000.artist FROM TopAlbums ";
		// then we are going to join them whenever these below are equal. 
		query += "INNER JOIN top5000 ON (TopAlbums.artist = top5000.artist AND "
		query += "TopAlbums.year = top5000.year) ";
		// and we are specifically searching for the artist that we input.
		query += "WHERE (TopAlbums.artist = ? AND top5000.artist = ?) ORDER BY TopAlbums.year";


		// you query from both tables and once you get the result
		// you use it to display the data.
		connection.query(query, [answer.artist, answer.artist], function(err,res){
			console.log(res.length + " Matches found!");

			for (var i = 0; i<res.length; i++){
				console.log("Album Position: " + res[i].position 
					+ "\nArtist: " + res[i].artist
					+ "\nSong: " + res[i].song 
					+ "\nAlbum: " + res[i].album
					+ "\nYear: " + res[i].year + "\n-------------------");
			}

			runSearch();
		})
	})
}











