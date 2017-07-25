

// * **Instructions**

//   * Using the previous example as a guide, create an app that has two web servers.
//   * One that listens on port 7000 and one that listens on port 7500.
//   * The one listening on port 7000 will always tell the user something good about themselves.
//   * The one listening on 7500 will always tell the user something bad about themselves.
//   * Make sure you create a Github repo and commit this code!

//   **Bonus**

//   * Look for other ways to expand what your server can do. As possibilities:
//     * Generate the good/bad phrase randomly from a list of predefined phrases
//     * Use the `twitter` package inside the response to also return a random tweet



// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORT = 7000;
var PORT2 = 7500;



// Here we create a generic function to handle requests and responses
function handleRequest(request, response) {
  response.end("You are awesome!");
}

function handleRequest2(request, response) {
  response.end("You are bad!");
  
}



// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);





// Here we start our server so that it can begin listening to client requests.
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:%s", PORT);
});


// Here we start our server so that it can begin listening to client requests.
server2.listen(PORT2, function() {
  console.log("Server listening on: http://localhost:%s", PORT2);
});









