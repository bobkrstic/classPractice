// * **Instructions**:

//   * Create a function, called `assertThrows`, 
//   which takes an argument called `func`, and calls it as a function.

//   * Create another function, called `multiply`, 
//   which prints the result of multiply 2 and 2.

//   * Use `assertThrows` to call `multiply`.

//   * Next, update `multiply` to accept two arguments, 
//   `x` and `y`, and returns the result of multiply them.

//   * Update `assertThrows` so that it can call `multiply` 
//   with two arguments.

//   * Ensure everything works by using `assertThrows` 
//   to print the result of multiplying two numbers.

//   * Next, update `multiply` so that it throws an error 
//   if either `x` or `y` is not a number, and returns the 
//   	result otherwise.

//   * Finally, update `assertThrows` such that it prints 
//   'Function threw.' to the console, and returns `true`.


var assertThrows = function(func) {

}

var multiply = function() {
	console.log("The multiply of 2 by 2 is 4");
}


assertThrows(multiply);

var assertThrows = function(x,y) {
	return x*y;
}


var assertThrows = function(multiply(x,y)){
	return x*y;
}


var multiply = function(x,y) {
	if(x != num || y != num) {
		console.log("error");
	} else {
		return x*y;
	}
}

var assertThrows = function() {
	console.log('Function threw');
	return true;
}










