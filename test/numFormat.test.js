const assert = require("chai").assert;
import { numFormatter } from "../src/Components/Amountfiles/numFormatter.js";
//const numFormater = require("../src/Components/Amountfiles/numFormatter");

describe("Checks for the principal amount range", () => {
  it("Displays the range of the principal amount after checking it", () => {
    assert.equal(numFormatter(100000), "100k");
  });
});
