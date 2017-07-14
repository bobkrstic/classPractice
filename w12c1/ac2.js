var dogs = {
    raining: true,
    noise:"Woof",
    
    makeNoise: function() {
    	if (this.raining) {
    		console.log(this.noise);
    	}
    }
};


var cats = {
	raining: false,
	noise: "Meow!",

	makeNoise: function() {
		if (this.raining) {
			console.log(this.noise);
		}
	}
};


console.log(dogs.raining);

console.log(cats.noise);


massHysteria(dogs, cats);


function massHysteria(dogs, cats) {

	if (dogs.raining && cats.raining) {
		console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
	} else {
		console.log("NO BUENO TO KEEP DOGS AND CATS TOGETHER!");
	}
}

function makeItRain(dogs, cats) {
	cats.raining = true; 
	dogs.raining = true; 
}

makeItRain(dogs, cats);
massHysteria(dogs, cats);