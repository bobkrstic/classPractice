var str = "someString";

function callBack(str) {
	console.log(str);
}





function someFunction(str, func) {
	console.log("Print from someFunction " + str);
	//return str; 
	var newStr = str; 

	func(newStr);
}


someFunction(str,callBack);



var fs = require("fs");

function logBefore(func, message) {
	console.log(message);

	func();
}


function runf(func, bool) {
	if (bool) {
		func();
	}
}

function wrap(func, value) {
	return function() {
		return func(value);
	};
}


// callback appear in familiar places, like fs.writeFile.

fs.writeFile("log.txt", "Log message!", function(err) {
	if(err) {
		console.log(err);
	}

	console.log("File saved");
})


// alternatevely, we can assign our function to a variable
// and pass it by name

