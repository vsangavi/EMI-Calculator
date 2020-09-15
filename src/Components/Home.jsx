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
    /*this.amountHandler=this.amountHandler.bind(this)
    this.rateHandler = this.rateHandler.bind(this);
    this.yearHandler = this.yearHandler.bind(this);*/
  }
  
  amountHandler = (e, newAmount) => {
    this.setState({
      value: newAmount,
    });
  };
  rateHandler = (e, newRate) => {
    this.setState({
      rate: newRate,
    });
  };
  yearHandler = (e, newYear) => {
    this.setState({
      year: newYear,
    });
  };
  render() {
    return (
      <div>
        {" "}
        <Amount amountHandler={this.amountHandler} />
        <Rate rate={this.state.rate} rateHandler={this.rateHandler} />
        <Tenure year={this.state.year}yearHandler={this.yearHandler} />
      </div>
    );
  }
}
export default Home;
