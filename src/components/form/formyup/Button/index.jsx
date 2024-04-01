import { Button } from "@mui/material";
import { useFormikContext } from "formik";
import { ButtonWrapper } from "../../form/formyup/Button";

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };
  const configButton = {
    ...otherProps,
    variant: "contained",
    color: "primary",
    fullwidth: true,
    onClick: handleSubmit,
  };
  return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
