# Js Testing Tools Comparison

## Chai
- This is an expectation / assertion library
- expect/should/assert are function given by chai

## Mocha / Jasmine
- This is a test runner, used to run your tests and log your test results
- Functions by mocha/jasmine and used to organized your test
- describe → Describe a function
- it → Specify what certain conditions are met. Lives inside the describe
- beforeEach → Setup tests before it starts

## Jest
- A unit testing framework developed by Facebook for ReactJS project.
- Most used in ReactJS Project.
- Use Jest to capture snapshots of React components for certain time with props and states changes. Can be used together with Enzyme.
- Can mock clickable events to capture state changes in a snapshot.

---

# Test Types

- **Unit Tests**
  
  Testing of individual functions or classes by supplying input and making sure the output is as expected.

- **Integration Tests**

  Testing processes or components to behave as expected, including the side effects.

- **UI Tests** (A.K.A Functional Tests)

  Testing scenarios on the product itself, by controlling the browser or the website, regardless of the internal structure to ensure expected behavior.




I've implement two difference testing tools:

Code being tested: `./src/Calculator.ts`
```
export default class Calculator {
  public value: number;

  constructor() {
    this.value = 0;
  }

  public add(n: number): number {
    this.value += n;
    return this.value;
  }
}
```

### Chai

`./tests/calculator.ts`
```
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
```

### Jest

`./__tests__/calculator.test.ts`
```
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
```