  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCyFEY2gGQSukpynAlVA7R1VxoZ2OE69io",
    authDomain: "biddingproject-b0187.firebaseapp.com",
    databaseURL: "https://biddingproject-b0187.firebaseio.com",
    projectId: "biddingproject-b0187",
    storageBucket: "biddingproject-b0187.appspot.com",
    messagingSenderId: "339277911734"
  };
  firebase.initializeApp(config);
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)


// Assign the reference to the database to a variable named 'database'
//var database = ...
 var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the local data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the local variables for highBidder equal to the stored values in firebase.
    highPrice = snapshot.val().highPrice;
    highBidder = snapshot.val().highBidder; 


    // change the HTML to reflect the newly updated local values (most recent information from firebase)
      $("#highest-bidder").html(highPrice);
      $("#highest-price").html(highBidder);
      

    // Print the local data to the console.
    console.log(highPrice);
    console.log(highBidder);


  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the local value in firebase
    $("#highest-bidder").html(initialBidder);
    $("#highest-price").html(initialBid);

    // Print the local data to the console.
    console.log(highPrice);
    console.log(highBidder);


  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var bidderName = $("#bidder-name").val().trim();
  var bidderPrice = $("#bidder-price").val().trim();

  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
      database.ref().set({
        highBidder: bidderName,
        highPrice: bidderPrice
      });

    // Log the new High Price
    console.log(bidderPrice)

    // Store the new high price and bidder name as a local variable (could have also used the Firebase variable)
    highBidder = bidderName;
    highPrice = parseInt(bidderPrice);

    // Change the HTML to reflect the new high price and bidder
    $("#bidder-name").html(snapshot.val().bidderName);
      $("#bidder-price").html(snapshot.val().bidderPrice);

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});