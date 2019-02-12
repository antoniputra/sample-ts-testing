import Calculator from "../src/Calculator";

describe("Test Calculator class", () => {

  test("Initialise with default value of 0", () => {
    const calc = new Calculator();
    expect(typeof calc.value).toBe("number");
    expect(calc.value).toBe(0);
  });

  describe("Calculator.add", () => {

    test("Should store the result of an addition performed immediately.", () => {
      var calc = new Calculator
      expect(typeof calc.value).toBe("number");
      expect(calc.add(5)).toBe(5);
    });

    test("Should allow multiple additions to be performed, returning the result of the final additon", () => {
      var calc = new Calculator
      calc.add(3)
      calc.add(7)
      expect(typeof calc.value).toBe("number");
      expect(calc.value).toBe(10);
    });

  });
});