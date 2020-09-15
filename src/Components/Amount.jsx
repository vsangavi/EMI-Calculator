import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { followersMarks } from "../Components/Amountfiles/followersMarks";
import { numFormatter } from "../Components/Amountfiles/numFormatter";
const scale = (value) => {
  const previousMarkIndex = Math.floor(value / 25);
  console.log(value, "value");
  const previousMark = followersMarks[previousMarkIndex];
  console.log(previousMarkIndex, "previousMarkIndex");
  const remainder = value % 25;
  if (remainder === 0) {
    return previousMark.scaledValue;
  }
  const nextMark = followersMarks[previousMarkIndex + 1];
  console.log(nextMark, "nextMark");
  const increment = (nextMark.scaledValue - previousMark.scaledValue) / 25;
  return remainder * increment + previousMark.scaledValue;
};

export default function NonLinearSlider() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography gutterBottom>EMI CALCULATION</Typography>
      <Typography>Value: {scale(value)}</Typography>
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
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </div>
  );
}
