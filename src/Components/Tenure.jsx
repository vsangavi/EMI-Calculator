import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
class Tenure extends Component {
  constructor() {
    super();
    this.state = {
      years: 1,
    };
  }
  render() {
    const handleYear = (e, value) => {
      this.setState({
        years: value,
      });
    };
    return (
      <div>
        <Typography>Tenure</Typography>
    <Typography>Years:{this.state.years}</Typography>
        <div>
          <Slider
            style={{ maxWidth: 500, color: "green" }}
            min={1}
            value={this.value}
            step={1}
            track="normal"
            max={30}
            marks
            onChange={handleYear}
            valueLabelDisplay="auto"
          />
        </div>
      </div>
    );
  }
}
export default Tenure;
