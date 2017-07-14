var fs = require("fs");

fs.readFile("a3.txt", "utf8", function(error, data){


	if (error) {
		return console.log(error);
	}

	console.log(data);

	var dataArr = data.split(",");

	console.log("This is the whole array: " + dataArr);
	console.log("-------------------------------------");
	console.log("And now separated array with the ',' ");
	console.log("--------------------------------------");
	for (var i=0; i<dataArr.length; i++){
		console.log(dataArr[i]);
		console.log("----------");
	}


});