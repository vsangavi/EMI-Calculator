import React from "react";
import "../Styles/amount.css";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
//import { followersMarks } from "../Components/Amountfiles/followersMarks";
import { numFormatter } from "../Components/Amountfiles/numFormatter.js";
import { scale } from "../Components/Amountfiles/scale";

//This Component is used to get the principal amount .
const Amount = (props) => {
  let { amountHandler, value } = props;
  return (
    //returns a slider for principal amount in which users can drag the required amount
    <div className="typo">
      <h3>EMI CALCULATOR</h3>
  
      <div className="value">
        <div className="div1">Loan Amount</div>
        {" "}
        <Typography>₹{scale(value)}</Typography>
      </div>
      <Slider
        style={{
          maxWidth: 500,
          color: "#0899ba",
        }}
        value={value} //It gets the value as props from the Home Component
        min={0}
        step={1}
        track="normal"
        max={200}
        valueLabelFormat={numFormatter}
        scale={scale}
        onChange={amountHandler} //It handles the change as a props from Home component
        valueLabelDisplay="auto"
      />
    </div>
  );
};
export default Amount;
