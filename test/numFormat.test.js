const assert = require("chai").assert;
const formatter = require("../src/Components/Amountfiles/numFormatter.js");
let number = 100000;
describe("Checks for the principal amount range", () => {
  it("Displays the range of the principal amount after checking it with the extensions", () => {
    let storeVar = formatter.numFormatter(number);
    assert.equal(storeVar, "100K");
  });
});
describe("Checks for the positive number of principal amount", () => {
  it("Should return true if the number is a positive number ", () => {
    assert.equal(!isNaN(number), true);
  });
});
