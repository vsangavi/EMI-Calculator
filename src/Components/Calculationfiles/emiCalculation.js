 export const emiCalculation=(principalValue, rate, tenure)=> {
    if (principalValue > 0 && tenure > 0) {
      let numerator = principalValue * rate * Math.pow(1 + rate, tenure);
      let denominator = Math.pow(1 + rate, tenure) - 1;
      let resultVal = numerator / denominator;
      return resultVal;
    }
  }