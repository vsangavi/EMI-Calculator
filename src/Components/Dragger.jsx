import React, { Component } from "react";

class Dragger extends Component {
  render() {
    let emiCalculation = (principalValue, rate, tenure) => {
      if (principalValue > 0 && tenure > 0) {
        let numerator = principalValue * rate * Math.pow(1 + rate, tenure);
        let denominator = Math.pow(1 + rate, tenure) - 1;
        let resultVal = numerator / denominator;
        return resultVal;
      }
    };
    return <div>Dragger</div>;
  }
}

export default Dragger;
