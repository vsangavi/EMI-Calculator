import React from "react";
import { Doughnut } from "react-chartjs-2";
import "../Styles/pie.css";

export default function Piechart(props) {
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
