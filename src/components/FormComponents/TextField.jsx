import { FormControl, TextField } from "@mui/material";
import React from "react";

export const TextFields = ({ name, label , type}) => {
  return (
    <>
      <FormControl fullWidth>
        <TextField variant="filled" label={label} sx={{mb : '1rem'}} type={`${type ? type : null}`} />
      </FormControl>
    </>
  );
};
