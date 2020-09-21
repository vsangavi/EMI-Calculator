import React from "react";
import { Doughnut } from "react-chartjs-2";
function Doughchart(props) {
  return (
    <div>
      <Doughnut
        data={props.chartData}
        options={{
          title: {
            display: true,
            fontSize: 25,
          },
          legend: {
            display: true,
            position: "top",
          },
        }}
      />
    </div>
  );
}
export default Doughchart;
