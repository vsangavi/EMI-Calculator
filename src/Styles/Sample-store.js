import React, { Component } from "react";
import "./App.css";
import Piechart from "./Components/Piechart";

import Home from "./Components/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: ["Total Interest", "Principal Amount"],
        datasets: [
          {
            label: "EMI",
            //Have to make this data dynamic from dragger value
            data: [4254, 100000],
            backgroundColor: ["#0899ba", "#ff87ab"],
          },
        ],
      },
    });
  }

  render() {
    return (
      <div className="App">
        <Home />
        <Piechart chartData={this.state.chartData} legendPosition="bottom" />
      </div>
    );
  }
}

export default App;



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
