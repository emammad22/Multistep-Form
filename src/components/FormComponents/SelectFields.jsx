import { FormControl, MenuItem, TextField } from "@mui/material";
import React from "react";

export const SelectFields = ({ name, label, options }) => {
  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
      <TextField select label={label} variant="filled">
        <MenuItem>None</MenuItem>
        {options?.map((option, index) => {
          return (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </TextField>
    </FormControl>
  );
};
