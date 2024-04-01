import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useField, useFormikContext } from "formik";

const CheckBoxWrapper = ({ name, label, legend, ...otherProps }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const handleChange = (event) => {
    const { checked } = event.target;
    setFieldValue(name, checked);
  };
  const configCheckBox = {
    ...field,
    ...otherProps,
    size: "small",
    color: "primary",
    onchange: handleChange,
  };
  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }
  return (
    <FormGroup {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormControlLabel
        control={<Checkbox {...configCheckBox} />}
        label={label}
      />
    </FormGroup>
  );
};

export default CheckBoxWrapper;
