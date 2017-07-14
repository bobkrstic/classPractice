function Character(name, profession, gender, age, strength, hp) {
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hitPoints = hp;
	this.printStats = function () {
		console.log(this);

	    // this.printStats = function() {
	    //     for (var key in this) {
	    //         if (typeof this[key] !== "function") {
	    //             console.log(key + " = " + this[key]);
	    //         }
	    //     }
	    // };


	};
}


var bob = new Character("Bob", "TheBest", "Male", 30, 50, 100);
var martins = new Character("Martins", "TheGod", "Male", 30, 40, 100);

bob.printStats();
console.log("------------------");
martins.printStats();





function IsAlive(character) {
	if (character.hitPoints > 0) {
		console.log(character.name + " is alive.");
	} else {
		console.log(character.name + " is not alive.");
	}
}


IsAlive(bob);
IsAlive(martins);


function Attack(character) {
	character.hitPoints = character.hitPoints - bob.strength;
	console.log("HitPoints " + character.hitPoints)
}


Attack(martins);


function LevelUp(character) {
	console.log(character.age);
	character.age += 1;
	console.log(character.age);
	character.strength += 5;
	character.hitPoints += 25; 
}

LevelUp(bob);