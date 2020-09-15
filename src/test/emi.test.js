const assert = require("chai").assert;
 
const getResult = require("../emiCal");

describe("Checks for the principle amount", () => {
  it("The value is chaecked and passed", () => {
    let checkPrincipal = getResult.emiCalculation(100000, 0.0016666, 24); 
    assert.equal(checkPrincipal, 4254.00794);
  });
});
