// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 55,
  forcePoints: 1350
}];

// Routes
// ===========================================================

app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// What does the question mark indicate?
app.get("/api/:characters?", function(req, res) {
  // What does this code do?
  // ":" means that the entire thing after the slash is something to serach for 
  // and it is optional
  var chosen = req.params.characters;


  // since it is optional, it will check whether was input and then try to match
  // and does it's thing. 
  if (chosen) {
    console.log(chosen);

    // What does this code do?
    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }

    return res.send("No character found");
  } else {
      // What does this code do?
      return res.json(characters);
  }


});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});