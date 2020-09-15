import React from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
const Rate = (props) => {
  return (
    <div>
      <Typography>Rate</Typography>
      <Typography>RPA:{props.rate}</Typography>
      <Slider
        style={{ maxWidth: 500, color: "#0899ba" }}
        min={0}
        value={props.rate}
        marks
        max={30}
        valueLabelDisplay="auto"
        onChange={props.rateHandler}
      />
    </div>
  );
};

export default Rate;
