var input = process.argv;
// console.log(input);

var operator = input[2];
var num1 = input[3];
var num2 = input[4];


// in the console type:
// node calculator.js exp 23 54
// will display:
//  exp
//  23
//  54 
console.log(operator);
console.log(num1);
console.log(num2);


// at this point num1 and num2 are strings
// hence we need to parseFloat them
// using float as the number may have decimal points
if (operator == "add") {
	console.log(parseFloat(num1) + parseFloat(num2));
}

else if (operator == "subtract") {
	console.log(parseFloat(num1) - parseFloat(num2));
}

else if (operator == "multiply") {
	console.log(parseFloat(num1) * parseFloat(num2));
}

else if (operator == "divide") {
	console.log(parseFloat(num1) / parseFloat(num2));
}

else if (operator == "exp") {
	console.log(parseFloat(num1) ^ parseFloat(num2));
}

else if (operator == "remainder") {
	console.log(parseFloat(num1) % parseFloat(num2));
}

else {
	console.log("operator not found");
}