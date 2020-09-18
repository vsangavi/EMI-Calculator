export const emiCalculation = (valueScale, lrate, lyear) => {
  let numerator = valueScale * lrate * Math.pow(1 + lrate, lyear);
  let denominator = Math.pow(1 + lrate, lyear) - 1;
  let resultVal = numerator / denominator;
  return resultVal;
};
