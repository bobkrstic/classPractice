var fs = require("fs");

fs.readFile("a3.txt", "utf8", function(error, data){


	if (error) {
		return console.log(error);
	}

	console.log(data);

	var dataArr = data.split(",");

	// console.log(dataArr);

	for (var i=0; i<dataArr.length; i++){
		console.log(dataArr[i]);
	}


});