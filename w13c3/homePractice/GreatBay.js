var mysql = require("mysql");
var inquirer = require("inquirer");

// create connection using node
// need to create a connection object for that
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	database: "greatbay_DB"
})

connection.connect(function(err){
	console.log("Connected as id: " + connection.threadId);
	start();
})


var start = function(){
	inquirer.prompt([
		{
			name: "postOrBid",
			type: "rawlist",
			message: "Would you like to [POST] an auction or [BID] on an auction?",
			choices: ["POST", "BID"]
		}
	]).then(function(answer){
		if(answer.postOrBid.toUpperCase()=="POST"){
			postAuction();
		} else {
			bidAuction();
		}
	})
}

var postAuction = function() {
	inquirer.prompt([
		{
			name: "item",
			type: "input",
			message: "What is the item you wish to submit?"
		},
		{
			name: "category",
			type: "input",
			message: "What category would you like to place it in?"
		},
		{
			name: "startingBid",
			type: "input",
			message: "What would you like the starting bid to be?",
			validate: function(value){
				if(isNaN(value)==false) {
					return true;
				} else {
					return false;
				}
			}
		}
	]).then(function(answer){
		// now using mysql to insert data into the data base
		// this is done by using the connection query. 
		connection.query("INSERT INTO auctions SET ?", {
			// to the left are the names of the columns from the table
			itemname: answer.item,
			category: answer.category,
			startingbid: answer.startingBid,
			highestbid: answer.startingBid
		},function(err,response){
			console.log("Your auction was created successfully!");
			start();
		})
	})
}


var bidAuction = function() {
	//first thing is to collect and print all of the current auctions data from the table
	// again done by using the connection querry
	connection.query("SELECT * FROM auctions", function(err, res){
		console.log(res);
		// then prompt the user
		inquirer.prompt({
			name: "choice",
			type: "rawlist",
			choices: function(value){
				var choiceArray = [];
				for(var i=0; i<res.length; i++){
					choiceArray.push(res[i].itemname);
				} 
				return choiceArray;
			},
			message: "What auction would you like to place a bid on?"
		}).then(function(answer){
			// when we select the option from above, we will now
			// place a new bid - update our data in the database
			for (var i = 0; i < res.length; i++){
				if(res[i].itemname == answer.choice){
					var choosenItem = res[i];
					inquirer.prompt([
						{
							name: "bid",
							type: "input",
							message: "How much would you like to bid?",
							validate: function(value){
								if(isNaN(value)==false) {
									return true;
								} else {
									return false;
								}
							}
						}
					]).then(function(answer) {
						if(choosenItem.highestbid < parseInt(answer.bid)){
							connection.query("UPDATE auctions SET ? WHERE ?", [ {highestbid: answer.bid }, {id: choosenItem.id} ], function(err,res) {
								console.log("Bid successfully placed!");
								start();
							});
						} else {
							console.log("Your bid was too low. Try again...");
							start();
						}
					})
				}
			}

		})
	})
}












