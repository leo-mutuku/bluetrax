import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

const SelectWrapper = ({ name, otherProps, options }) => {
  const [field, meta] = useField(name);
  const handleChange = (event) => {
    const { value } = event.target;
    formik.setFieldValue(name, value);
  };
  const configSelect = {
    select: true,
    variant: "outlined",
    fullWidth: true,
    onchange: () => {},
  };
  return <TextField />;
};

export default SelectWrapper;
