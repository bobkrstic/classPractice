// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Specify the port.
var port = 3000;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "seinfeld_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

var render = (result) => {
  var actors = result.map(actor => `
      <li>
        <p>Id: ${actor.id}</p>
        <p>Actor: ${actor.name}</p>
        <p>Coolness: ${actor.coolness_points}</p>
        <p>Attitude: ${actor.attitude}</p>
      </li>
    `).join("");

  return `
      <h1>Actors</h1>
      <ul>
        ${actors}
      </ul>
    `;
};

// Routes
app.get("/cast", function(req, res) {
  connection.query("SELECT * FROM actors", function(err, result) {
    res.send(render(result));
  });
});

app.get("/coolness-chart", function(req, res) {
  connection.query("SELECT * FROM actors ORDER BY coolness_points DESC", function(err, result) {
    res.send(render(result));
  });
});

app.get("/attitude-chart/:att", function(req, res) {
  var attitude = req.params.att;
  connection.query("SELECT * FROM actors where ? ", {
    attitude: attitude
  }, function(err, result) {
    res.send(render(result));
  });
});



// Initiate the listener.
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
