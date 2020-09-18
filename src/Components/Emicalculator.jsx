import React from "react";
import { scale } from "../Components/Amountfiles/scale";
import { emiCalculation } from "../Components/Calculationfiles/emiCalculation";
import Piechart from "../Components/Piechart";
import { totalInterest } from "../Components/Calculationfiles/totalInterest";
const Emicalculator = (props) => {
  let { rate, year, value } = props;
  let lrate = rate / 100 / 12;
  let lyear = year * 12;
  let valueScale = scale(value);
  let result = Math.round(emiCalculation(valueScale, lrate, lyear));
  let interestTotal = totalInterest(result, valueScale, lyear);
  let chartData = {
    labels: ["Total Interest", "Principal Amount"],
    datasets: [
      {
        label: "EMI",
        //Have to make this data dynamic from dragger value
        data: [interestTotal, valueScale],
        backgroundColor: ["#0899ba", "#ff87ab"],
      },
    ],
  };
  return (
    <div>
      <div> Monthlyemi={result}</div>
      <div>Totalinterest={interestTotal}</div>

      <Piechart result={result} valueScale={valueScale} chartData={chartData} />
    </div>
  );
};
export default Emicalculator;
