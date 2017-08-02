// * **Instructions**

//   * Create a seinfeld_db database with an actors table.

//     * The actors table will have a column 
//     for id (PRIMARY KEY AUTO_INCREMENT int), name (varchar), coolness_points (int), and attitude (varchar).

//   * Add in four actors with different names, 
// coolness_points, and attitudes.

//   * Create a Node Application with Express, MySQL, 
//   and Body Parser with three Express routes.

//     * Create a `/cast` route that will display all the 
//     actors and their data ordered by their id's.

//     * Create a `/coolness-chart` route that will display 
//     all the actors and their data ordered by their coolness points.

//     * Create a `/attitude-chart/:att` route that will 
//     display all the actors for a specific type of attitude.

var express = require('express');
var mySql = require('mySql');

var app = express();

var connection = mySql.createConnection({
	host: "localhost",
	user: "root",
	database: "seinfeld_db"
});

connection.connect(function(err) {
	if(err) {
		console.log(err)
	}
	console.log("connected as id " + connection.threadId);
})