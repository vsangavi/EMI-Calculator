import React from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
//This component is to get the mo of years.
const Tenure = (props) => {
  let { year, yearHandler } = props;
  return (
    <div>
      <Typography>years:{year}</Typography>
      <Slider
        style={{ maxWidth: 500, color: "#0899ba" }}
        min={1}
        value={year} //It gets the value as props from the Home Component
        marks
        max={30}
        valueLabelDisplay="auto"
        onChange={yearHandler} //It handles the change as a props from Home component
      />
    </div>
  );
};

export default Tenure;
