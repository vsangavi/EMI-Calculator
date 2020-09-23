const assert = require("chai").assert;
const emi = require("../src/Components/Calculationfiles/emiCalculation")
  .emiCalculation;

describe("Checking for the EMI calcuolations", () => {
  it("Should return the EMI value Which is a Number", () => {
    assert.equal(Math.round(emi(100000, 0.00166, 24)), 4254);
  });
});
