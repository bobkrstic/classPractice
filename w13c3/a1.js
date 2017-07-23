var mysql = require("mysql");

var connection  = mysql.createConnection({
	host: "localhost",
	port: 3306,

	// user name
	user: "root",
	password: "",
	database: "top_songsDB"
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
	afterConnection();
	specificSong();
	specificArtist();
	artistMoreThanOnce();
	specificRange();
	connection.end();
});




function afterConnection() {

	connection.query("SELECT * FROM Top5000", function(err, res) {
		if (err) throw err;
		//console.log(res);


		for (var i = 0; i < 5; i++) {
		// for(var i = 0; i < res.length; i++) {
			console.log(res[i].artist_name);
		}
	});

	console.log("------------------------");
	//connection.end();
	// specificSong();
}



function specificArtist() {
	console.log("Selecting and artist named...\n");
 	connection.query("SELECT * FROM Top5000 WHERE artist_name = 'Amy Winehouse';", function(err, res) {
    if(err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    console.log("-----------------------------");
    // connection.end();
  });
}


function artistMoreThanOnce() {
	console.log("Selecting artist that appears more than once...");
	connection.query("SELECT artist_name FROM Top5000 GROUP BY artist_name HAVING COUNT(*)>1;", function(err, res){
		if (err) throw err;

		console.log(res);
		console.log("----------------------------");
	});
}


function specificRange() {
		console.log("Selecting RANGE...\n");
 	connection.query("SELECT * FROM Top5000 WHERE ID BETWEEN 50 AND 100;", function(err, res) {
    if(err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    console.log("-----------------------------");
    // connection.end();
  });
}



function specificSong() {
	console.log("Selecting all songs named White Christmas...\n");
 	connection.query("SELECT * FROM Top5000 WHERE song_name = 'White Christmas';", function(err, res) {
    if(err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    console.log("-------------------------------");
    // connection.end();
  });
}

// # **Instructions**

// * Now that we have learned how to import big collections of data into a server, it is time to put this new knowledge to the test by importing all of the data contained within `TopSongs.csv` into our database.

//   * HINT: Remember, bigger datasets require more time to import properly, so be patient

//   * HINT: If you feel that the import process is taking far too long, feel free to use `Top1000Songs.csv` instead. We would highly recommend working with the bigger dataset if you can, however.

//   * HINT: Take the downtime you have been given to start on the next part of the activity

// * With all of your data successfully imported into the database, begin working on a Node console application which will allow you to collect more specialized pieces of data. For example...

//   * A query which returns all data for songs sung by a specific artist
//   * A query which returns all artists who appear within the top 5000 more than once
//   * A query which returns all data contained within a specific range
//   * A query which searches for a specific song in the top 5000 and returns the data for it

// * HINT: There are some MySQL queries which could make some of these tasks even easier to accomplish. Feel free to look at MySQL's documentation to find some of them.