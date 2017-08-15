//    7) Navigate to the models folder and create a new file called `todo.js`. 
// // Create a Todo model with columns for "text" (DataTypes.STRING), 
// and "complete" 
// // (DataTypes.BOOLEAN).


module.exports = function(sequelize, DataTypes) {
	var Task = sequelize.define('Task', {
		text: DataTypes.STRING,
		complete: DataTypes.BOOLEAN
	});
	return Task;
}