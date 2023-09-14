import { Stepper, Step, StepLabel } from "@mui/material";
import React from "react";

export const StepProgressBar = ({step}) => {
  return (
    <Stepper activeStep={step} alternativeLabel sx={{mb : '2rem'}}>
      <Step>
        <StepLabel>Personal Info</StepLabel>
      </Step>
      <Step>
        <StepLabel>Special Skills</StepLabel>
      </Step>
    </Stepper>
  );
};
