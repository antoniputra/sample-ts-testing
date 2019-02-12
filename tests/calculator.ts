import {expect} from "chai";
import Calculator from "../src/Calculator";

describe("Calculator", () => {
  it("should initialise with default value of 0", () => {
    const calculator = new Calculator();
    expect(calculator.value).to.be.a("number");
    expect(calculator.value).to.equal(0);
  });

  describe("Calculator.add", () => {
    it("should store the result of an addition performed immediately.", () => {
      const calculator = new Calculator();
      calculator.add(9);
      expect(calculator.value).to.equal(9);
    });

    it("should allow multiple additions to be performed, returning the result of the final additon", () => {
      const calculator = new Calculator();
      calculator.add(9);
      calculator.add(2);
      expect(calculator.add(1)).to.equal(12);
    });
  });
});
