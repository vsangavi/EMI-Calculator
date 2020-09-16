import React from "react";
import { followersMarks } from "../Components/Amountfiles/followersMarks";
import { numFormatter } from "../Components/Amountfiles/numFormatter";
//import { scale } from "../Components/Amountfiles/scale";

const Dragger = (props) => {
     const scale = (value) => {
       const previousMarkIndex = Math.floor(value / 25);
       const previousMark = followersMarks[previousMarkIndex];
       const remainder = value % 25;
       if (remainder === 0) {
         return previousMark.scaledValue;
       }
       const nextMark = followersMarks[previousMarkIndex + 1];
       const increment = (nextMark.scaledValue - previousMark.scaledValue) / 25;
       return remainder * increment + previousMark.scaledValue;
     };
  return (
    <div>
      {" "}
      <Typography gutterBottom>EMI CALCULATION</Typography>
      <Typography>Value: {scale(props.value)}</Typography>
      <Slider
        style={{
          maxWidth: 500,
          color: "#0899ba",
        }}
        value={props.value}
        min={0}
        step={1}
        track="normal"
        max={200}
        valueLabelFormat={numFormatter}
        marks={followersMarks}
        scale={scale}
        onChange={hprops.andleChange}
        valueLabelDisplay="auto"
      />{" "}
    </div>
  );
};

export default Dragger;
