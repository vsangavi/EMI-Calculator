import React, { Component } from "react";

import "./App.css";
import Piechart from "./Components/Pie";
import Tenure from "./Components/Tenure";
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
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
            ],
          },
        ],
      },
    });
  }

  render() {
    return (
      <div className="App">
        <Home />
        <Tenure />
        <Piechart chartData={this.state.chartData} legendPosition="bottom" />
      </div>
    );
  }
}

export default App;
