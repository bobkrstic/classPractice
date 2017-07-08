var fs = require("fs");
var totalAmount = 0;

fs.readFile("bank.txt", "utf8", function(error, data) {
	if (error) {
		return console.log(error);
	}

	console.log(data);


	var dataArr = data.split(",");

	console.log(dataArr);


		for (var i=0; i<dataArr.length; i++) {
			//console.log(dataArr[i]);
			totalAmount += parseFloat(dataArr[i]);
		}

	console.log("Total start is: " + totalAmount);


	var action = process.argv[2];




	if (action === "deposit") {
		totalAmount = totalAmount + parseFloat(process.argv[3]);
		console.log("Total after the deposit: " + totalAmount);
		fs.appendFile("bank.txt", ("," + parseFloat(process.argv[3])), function(err) {
			if (err) {
				console.log(err);
			} else {
				console.log("Added to the bank");
			}
		});
	}



	if (action === "total") {
		for (var i=0; i<dataArr.length; i++) {
			console.log(dataArr[i]);
			totalAmount += parseFloat(dataArr[i]);
		}
		console.log("Total is: " + totalAmount);
	}



});



