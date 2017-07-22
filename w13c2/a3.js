var mysql = require("mysql");

var connection  = mysql.createConnection({
	host: "localhost",
	port: 3306,

	// user name
	user: "root",
	password: "",
	database: "playlistDB"
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
	afterConnection();
});




function afterConnection() {

	connection.query("SELECT * FROM songs", function(err, res) {
		if (err) throw err;
		console.log(res);

		for(var i = 0; i < res.length; i++) {
			console.log(res[i].title);
		}
	});
}



// Using the connection and song data you put together earlier into the class, we are going to print playlists to the Git Bash console based upon the genre or artist.

// First create code that prints all songs within your database to the terminal.

// Now create code that prints songs of a specific genre/artist to the terminal.

// If you don't have many songs in your database at this point in time, take this moment to add some more to it. Try to give yourself a variety of songs to work with.

// HINT: Remember that you can call specific data using SQL commands we went over last class. If you are having trouble, make sure to look into SQL commands once more.

// BONUS: Use 'placeholder' values or string concatenation to build a MySQL query which allows you to change pieces of the query on the fly (e.g. using a variable to build the WHERE clause, instead of a static string).