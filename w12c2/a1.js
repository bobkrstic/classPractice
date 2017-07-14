var Programmer = function(name, position, age, favProgLan) {
	this.name = name;
	this.position = position;
	this.age = age;
	this.favProgLan = favProgLan;

	    this.printStats = function() {
        for (var key in this) {
            if (typeof this[key] !== "function") {
                console.log(key + " = " + this[key]);
            }
        }
    };
}


var programmerObject = new Programmer("Bob", "Position", 30, "Javascript");

programmerObject.printStats();