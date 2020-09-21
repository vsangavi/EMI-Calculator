import React from "react";
import "../Styles/emi.css";
import { data } from "../Components/Value/data";
import { scale } from "../Components/Amountfiles/scale";
import { emiCalculation } from "../Components/Calculationfiles/emiCalculation";
import Doughchart from "../Components/Doughchart";
import { totalInterest } from "../Components/Calculationfiles/totalInterest";
const Emicalculator = (props) => {
  let { rate, year, value } = props;
  console.log(data.percent);
  let lrate = rate / data.percent / data.months;
  let lyear = year * data.months;
  let valueScale = scale(value);
  let result = Math.round(emiCalculation(valueScale, lrate, lyear));
  let interestTotal = totalInterest(result, valueScale, lyear);
  //
  let chartData = {
    labels: ["Total Interest", "Principal Amount"],
    datasets: [
      {
        label: "EMI",
        data: [interestTotal, valueScale],
        backgroundColor: ["#0899ba", "#ff87ab"],
      },
    ],
  };
  return (
    <div>
      <div className="emi">
        {" "}
        Monthlyemi={result} Totalinterest={interestTotal}
      </div>
      <Doughchart
        result={result}
        valueScale={valueScale}
        chartData={chartData}
      />
    </div>
  );
};
export default Emicalculator;
