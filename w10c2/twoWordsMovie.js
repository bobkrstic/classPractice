// -------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument 
// and retrieve the year it was created


// Level 2 (More Challenging):
// Take a movie with multiple words (ex: Forest Gump) as a Node argument 
// and retrieve the year it was created

// Include the request npm package (Don't forget to run "npm install request"
// in this folder first!)
var request = require("request");

// Store all of the arguments in an array
var nodeArgs = process.argv;
console.log(process.argv);

// Create an empty variable for holding the movie name
var movieName = "";

// Loop through all the words in the node argument
// and do a little for-loop magic to handle the includion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {
	if (i > 2 && i < nodeArgs.length) {
		movieName = movieName + "+" + nodeArgs[i];
	} else {
		movieName += nodeArgs[i];
	}
}


// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";


// This line is just to help u sdebug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body){

	// If the request is successful
	if (!error && response.statusCode === 200) {

		// Parse the body of the site and recover jus the imdbRating
		// (Note: The syntax below for parsing isn't obvious. 
		// Spend a few moments dissecting it).

		console.log("Body: " + body);
		console.log("Response: " + response);
		console.log("Release Year: " + JSON.parse(body).imdbRating);
	}
});