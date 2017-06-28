

var stuffINeed = require("./bands.js");

// console.log("A punk band is " + stuffINeed.essentials.punk);

// console.log("A rap band is " + stuffINeed.essentials.rap);


// console.log("A classic band is " + stuffINeed.essentials.classic);


if (process.argv[2] === "classic") {
	console.log(stuffINeed.essentials.classic);
} else if (process.argv[2] === "rap") {
 	console.log(stuffINeed.essentials.rap);
} else if (process.argv[2] === "punk") {
	console.log(stuffINeed.essentials.punk);
} else {
	console.log("No chance loser!");
}

