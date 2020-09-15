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
        <Home/>
        <Piechart chartData={this.state.chartData} legendPosition="bottom" />
      </div>
    );
  }
}

export default App;
