import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const DateTimePickerWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);
  const configDateTimePicker = {
    ...field,
    ...otherProps,
    size: "small",
    fullWidth: true,
    variant: "outlined",
    type: "datetime-local",
    InputLabelProps: {
      shrink: true,
    },
  };
  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }
  return <TextField {...configDateTimePicker}></TextField>;
};

export default DateTimePickerWrapper;
