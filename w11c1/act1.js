// # GeoCode NPM

// ## Files 

// * [geocode.js](Unsolved/geocode.js)

// ### Instructions

// * Create a Node application which makes use of the "geocoder" NPM package to obtain detailed geocoding information about a location.

// * Then `console.log` the geocoding information to display in your terminal.

// * You can choose to make one of two assumptions when completing this application.

//   * Easier Option: The user will always provide a location in the following format: "City, State" (example: "Atlanta, GA", "Houston, TX").

//   * Harder Option: The user can provide a location in any format. In fact, they can even provide a landmark instead of an address. ("151 Sip Ave, Jersey City NJ", "The Eiffel Tower", etc.)

// ### Hints

// * Remember to log the output using `JSON.stringify` in a pretty-print format.




// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)


var geocoder = require('geocoder');

// Take in the command line arguments
var city = process.argv[2];
var state = process.argv[3];

var fullString = city + ", " + state;



 
// Geocoding 
geocoder.geocode(fullString, function ( err, data ) {
  // do something with data 

  console.log(JSON.stringify(data.results[0], null, 2));
});




// Build your address as an array or string




// Then use Geocoder NPM to geocode the address