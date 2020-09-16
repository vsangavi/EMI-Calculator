import React, { Component } from "react";
import Tenure from "../Components/Tenure";
import Rate from "../Components/Rate";
import Amount from "../Components/Amount";
class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      years: 1,
      rate: 0,
      value: 0,
    };
  }
//onChange Handler for Amount Component
  amountHandler = (e, newAmount) => {
    this.setState({
      value: newAmount,
    });
  };
  //onChange Handler for Rate Component
  rateHandler = (e, newRate) => {
    this.setState({
      rate: newRate,
    });
  };
  //onChange Component for Tenure Component
  yearHandler = (e, newYear) => {
    this.setState({
      year: newYear,
    });
  };
  render() {
    return (
      //onChange Handlers and the state values are passed as the props to respective Components
      <div>
        {" "}
        <Amount amountHandler={this.amountHandler} value={this.state.value}/>
        <Rate rate={this.state.rate} rateHandler={this.rateHandler} />
        <Tenure year={this.state.year} yearHandler={this.yearHandler} />
      </div>
    );
  }
}
export default Home;
