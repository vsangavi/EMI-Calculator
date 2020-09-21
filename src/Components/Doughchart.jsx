import React from "react";
import "../Styles/doughnut.css";
import { Doughnut } from "react-chartjs-2";
function Doughchart(props) {
  return (
    <div>
      <Doughnut
        className="doughnut"
        
        data={props.chartData}
        options={{
          title: {
            display: true,
            fontSize: 25,
          },
          legend: {
            display: true,
            position: "left",
          },
        }}
      />
    </div>
  );
}
export default Doughchart;
