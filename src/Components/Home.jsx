import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const followersMarks = [
  {
    value: 0,
    scaledValue: 10000,
    label: "10k",
  },
  {
    value: 25,
    scaledValue: 50000,
    label: "50k",
  },
  {
    value: 50,
    scaledValue: 100000,
    label: "100k",
  },
  {
    value: 75,
    scaledValue: 250000,
    label: "250k",
  },
  {
    value: 100,
    scaledValue: 500000,
    label: "500k",
  },
  {
    value: 125,
    scaledValue: 1000000,
    label: "1M",
  },
  {
    value: 150,
    scaledValue: 5000000,
    label: "5M",
  },
  {
    value: 175,
    scaledValue: 7500000,
    label: "7.5M",
  },
  {
    value: 200,
    scaledValue: 10000000,
    label: "10M",
  },
];

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

function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
  } else if (num < 998) {
    return num; // if value < 1000, nothing to do
  }
}

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
        style={{ maxWidth: 500, color: "green" }}
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
