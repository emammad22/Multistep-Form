import React from "react";
import { TextFields } from "../FormComponents/TextField";
import { Box } from "@mui/material";
import { SelectFields } from "../FormComponents/SelectFields";

export const PersonalInfo = () => {

    const genders = ['Male', 'Female', 'Other'];
    const countries = ['Azerbaijan', 'United Kingdom','Russia', 'Estonia'];

  return (
    <Box component="div">
      <TextFields name="fullname" label="Full Name" />
      <TextFields name="email" label="Email" />
      <SelectFields name='gender' label='Gender' options={genders}/>
      <SelectFields name="country" label="Country" options={countries}/>
      <TextFields name="city" label="City" />
      <TextFields name="phone" label="Mobile Phone" type="number" />
    </Box>
  );
};
