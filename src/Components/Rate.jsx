import React from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
//This component is to get the Rate Per Annum.
const Rate = (props) => {
  let{rate,rateHandler}=props
  return (
    <div>
      <Typography>Rate</Typography>
      <Typography>RPA:{rate}</Typography>
      <Slider
        style={{ maxWidth: 500, color: "#0899ba" }}
        min={1}
        value={rate} //It gets the value as props from the Home Component
        marks
        max={30}
        valueLabelDisplay="auto"
        onChange={rateHandler} //It handles the change as a props from Home component
      />
    </div>
  );
};

export default Rate;
