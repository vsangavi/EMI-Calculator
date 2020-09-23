const assert = require("chai").assert;
const tAmount = require("../src/Components/Calculationfiles/totalAmount")
  .totalAmount;
describe("Returns the total amount of EMI and principal amount", () => {
  it("Should return a positive number of emi and the amount total", () => {
    assert.equal(tAmount(100000, 2096), 102096);
  });
});
