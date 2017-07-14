// user input always starts from the element number 2
// consider all input as an array
console.log("[0] is: " + process.argv[0]);
console.log("[1] is: " + process.argv[1]);
var a = process.argv[2];
var b = process.argv[3];

if (a === b) {
	console.log(true);
} else {
	console.log(false);
}


var result = a*b;

if ((a%7)==0 && (b%7)==0) {
	console.log(true);
} else {
	console.log(false);
}