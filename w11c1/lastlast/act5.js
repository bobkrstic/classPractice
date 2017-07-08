var inquirer = require("inquirer");

inquirer
.prompt ([

	{
		type: "input",
		message: "How old are you?",
		name: "userAge"
	},

	{
		type: "confirm",
		message: "Are you sure you are that old?",
		name: "confirmAge",
		default: true
	},

	{
		type: "password", 
		message: "We will need your password!",
		name: "userPassword"
	},

	{
		type: "list",
		message: "Choose your favourite food:",
		choices: ["cheese", "t-rex steak", "leather shoe"],
		name: "userFoodChoice"
	},

	{
		type: "confirm",
		message: "Are you sure",
		name: "confirm",
		default: true
	}



	])
.then(function(inquirerResponse){

	if (inquirerResponse.confirm) {
		console.log("\nNow Printing: " + inquirerResponse.userAge);
		console.log("Your choice was: " + inquirerResponse.userFoodChoice);
	} else {
		console.log("OK");
	}

})