// * **Instructions:**

//   * Create a website with four routes:
//     * Home
//     * Favorite Food
//     * Favorite Movies
//     * Favorite CSS Frameworks
//   * Each route should be triggered by a different URL.
//   * Each route should display an HTML page listing your favorite three things of each.
//   * Be sure to use `fs` to serve your HTML files.


// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/index.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });

}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});