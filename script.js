// * Return the string length
const stringLength = (str) =>
  str.length <= 0 ? "Sorry, but put in something" : str.length;

//* Reverses a string.
const reverseString = (string) => string.split("").reverse().join("");

// * A simple calculator app
class Calculator {
  add(a, b) {
    return eval(a + b);
  }

  subtract(a, b) {
    return eval(a - b);
  }

  multiply(a, b) {
    return eval(a * b);
  }

  divide(a, b) {
    return eval(a / b);
  }
}

const capitalize = (string) => {
  let split = `${string.charAt(0).toUpperCase() + string.slice(1)}`;
 return split
};


module.exports = {
  stringLength: stringLength,
  reverseString: reverseString,
  Calculator: Calculator,
  capitalize: capitalize
};
