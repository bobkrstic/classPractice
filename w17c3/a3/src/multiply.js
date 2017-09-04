"use strict";

var readArray = function readArray(x) {
  if (!Array.isArray(x)) {
    throw new Error(
      "This is a number"
    );
  } else {
    return 'bob & john';
  }
};

module.exports = readArray;
