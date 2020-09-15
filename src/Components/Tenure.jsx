import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
const Tenure = (props) => {
  
  return (
    <div>
      <Typography>Tenure</Typography>
      <Typography>Years:{props.year}</Typography>
      <div>
        <Slider
          style={{ maxWidth: 500, color: "#0899ba" }}
          min={1}
          value={props.year}
          step={1}
          track="normal"
          max={30}
          marks
          onChange={props.yearHandler}
          valueLabelDisplay="auto"
        />
      </div>
    </div>
  );
};

export default Tenure;
