// * **Instructions**

//     * Using your Karma setup, write tests for the `multiply` 
//     function we met in our last class. Make sure to test that it handles errors properly.

//     * After you've written tests describing the behavior of `multiply`, 
//     open a terminal and start Karma.

//     * In another terminal, write your implementation for `multiply`. 
//     Notice that Karma executes your tests every time you change your implementation.


var should = require("chai").should();

var multiply = function(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x or y is not a number.");
  }
  else return x * y;
};

describe("Multiply", function() {
  it("should multiply properly when passed numbers", function() {
    multiply(2, 4).should.equal(8);
  });

  it("should throw when not passed numbers", function() {
    (function() {
      multiply(2, "4");
    }).should.throw(Error);
  });
});