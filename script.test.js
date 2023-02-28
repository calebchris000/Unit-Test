const { stringLength, reverseString, Calculator, capitalize } = require("./script.js");
const word = "hello";
const another = "hello";

describe("String", () => {
  test("Return string length ", () => {
    expect(stringLength(word)).toBe(word.length);
  });

  test("Reverses string", () => {
    expect(reverseString(another)).toBe("olleh");
  });
});

let myCalc = new Calculator();

describe("Add number", () => {
  test("Add number group", () => {
    expect(myCalc.add(2, 3)).toBe(5);
  });

  test("Add num", () => {
    expect(myCalc.add(34, 7)).toBe(34 + 7);
  });

  test("Add num", () => {
    expect(myCalc.add(123, 371)).toBe(123 + 371);
  });
});

describe("Subtract number group", () => {
  test("Subtract 82 - 5", () => {
    expect(myCalc.subtract(82, 5)).toBe(82 - 5);
  });

  test("Subtract 34 - 7", () => {
    expect(myCalc.subtract(34, 7)).toBe(34 - 7);
  });

  test("Subtract 1022 - 371", () => {
    expect(myCalc.subtract(1022, 371)).toBe(1022 - 371);
  });
});

describe("Multiply number group", () => {
  test("Multiply 3 * 4", () => {
    expect(myCalc.multiply(3, 4)).toBe(3 * 4);
  });

  test("Multiply 12 * 7", () => {
    expect(myCalc.multiply(12, 7)).toBe(12 * 7);
  });

  test("Multiply 121 * 12", () => {
    expect(myCalc.multiply(121, 12)).toBe(121 * 12);
  });
});

describe("Divide number group", () => {
    test("Divide 9 / 3", () => {
      expect(myCalc.divide(9, 3)).toBe(9 / 3);
    });
  
    test("Divide 36 */ 6", () => {
      expect(myCalc.divide(36, 6)).toBe(36 / 6);
    });
  
    test("Divide 65536 / 16", () => {
      expect(myCalc.divide(65536, 16)).toBe(65536 / 16);
    });
  });


  describe('Check for Capitalize String', () => {
    test('capitalize', () => {
        expect(capitalize('hello')).toBe('Hello')
    })
  })