import React from "react";
import "../Styles/amount.css";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { followersMarks } from "../Components/Amountfiles/followersMarks";
import { numFormatter } from "../Components/Amountfiles/numFormatter";
import { scale } from "../Components/Amountfiles/scale";

//This Component is used to get the principal amount .
export default function Amount(props) {
  let { amountHandler, value } = props;
  return (
    <div className="typo">
      <h3>EMI CALCULATOR</h3>
      <div className="value">
        {" "}
        <Typography>Prinicipal Amount:₹{scale(value)}</Typography>
      </div>
      <Slider
        style={{
          maxWidth: 500,
          color: "#0899ba",
        }}
        value={value}
        min={0}
        step={1}
        track="normal"
        max={200}
        valueLabelFormat={numFormatter}
        marks={followersMarks}
        scale={scale}
        onChange={amountHandler}
        valueLabelDisplay="auto"
      />
    </div>
  );
}
