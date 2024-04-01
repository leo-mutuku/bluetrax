import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

const SelectWrapper = ({ name, options, ...otherProps }) => {
  const [field, meta] = useField(name);
  const handleChange = (event) => {
    const { value } = event.target;
    formik.setFieldValue(name, value);
  };
  const configSelect = {
    ...field,
    ...otherProps,
    size: "small",
    select: true,
    variant: "outlined",
    fullWidth: true,
    onchange: () => {},
  };
  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }
  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {options[item]}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectWrapper;
