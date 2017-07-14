function DigitalPal() {

		this.hungry = false; 
		this.sleepy = false;
		this.bored = true;
		this.age = 0;

	this.feed = function() {
		if (this.hungry === true) {
			console.log("That was yummy");
			this.hungry = false;
			this.sleepy = true;
		} else {
			console.log("No thanks! I'm full.");
		}
	}

	this.sleep = function () {
		if (this.sleepy === true) {
			console.log("Zzzzzzzzzzzz");
			this.sleepy = false;
			this.bored = true;
			this.increaseAge()
		} else {
			console.log("No way!. I'm not tired.")
		}
	}

	this.play = function () {
		if (this.bored === true) {
			console.log("Yay! Let's play!");
			this.bored = false; 
			this.hungry = true;
		} else {
			console.log("Not right now. Later?")
		}
	}

	this.increaseAge = function() {
		this.age++;
		console.log("Happy Birthday to me! I am " +this.age+ " old!");
	}
}



var Dog = new DigitalPal();

Dog.Outside = false;
Dog.Bark = function() {
	console.log("Woof! Wood!");
}

console.log(Dog);

// Dog.goOutside() {
// 	if(this.Outside === false) {
// 		console.log('Yay! I love the ')
// 	}
// }










