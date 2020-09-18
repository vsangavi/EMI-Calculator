export const totalInterest = (result, valueScale, lyear) => {
  let totalValue = result * lyear;
  let Interest = totalValue - valueScale;
  return Interest;
};
