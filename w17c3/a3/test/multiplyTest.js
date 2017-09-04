"use strict";

var readArray = require("../src/multiply.js");
var expect = require("chai").expect;
var toReadArray = ["bob", "john"];

describe("Read Array", function() {
  it("should return the array names separated with &", function() {
    expect(readArray(toReadArray)).to.equal("bob & john");
   // console.log(readArray);
  });

  it("should throw when argument is not a string", function() {
    expect(function() {
      readArray([2]);
    }).to.throw(Error);
  });
});
