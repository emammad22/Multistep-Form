import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { StepProgressBar } from "../components/StepProgressBar";

export const Subscription = () => {
  const [step, setStep] = useState(0);

  function handleNextStep() {
    setStep(step + 1);
  }

  return (
    <>
      <Box
        component="div"
        sx={{ display: "flex", flexDirection: "column", width: "29%" }}
      >
        <Typography
          variant="h4"
          sx={{
            mt: "1rem",
            mb: "2rem",
            color: "primary.light",
            width: "100%",
            textAlign: "center",
          }}
        >
          Subscription Form
        </Typography>
        {/* In the following the step progress bar will be displayed */}
        <StepProgressBar step={step} />
        {/* Subscription MultiStep Form */}
        <Box component="form" sx={{ width: "100%" }}>
          <Outlet />
          <Button
            type="button"
            variant="contained"
            sx={{ width: "100%" }}
            onSubmit={handleNextStep}
          >
            Next Step
          </Button>
        </Box>
      </Box>
    </>
  );
};
