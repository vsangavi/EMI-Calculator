import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import "../Styles/pie.css";

class Piechart extends Component {
  constructor(props) {
    super();
    this.state = {
      chartData: props.chartData,
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
  };
  render() {
    return (
      <div className="chart">
        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              fontSize: 25,
            },
            legend: {
              display: true,
              position: this.props.legendPosition,
            },
          }}
        />
      </div>
    );
  }
}

export default Piechart;
