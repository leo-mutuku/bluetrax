import { Formik, Form } from "formik";
import { Box, Stack, Grid, Typography, Button } from "@mui/material";
import Item from "@mui/material/Grid";
import { Row, Col } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import * as Yup from "yup";
import InputWithIcon from "../../components/form/InputWithIcon";
import SearchButtonWrapper from "../../components/form/SearchButtonWrapper";
import SearchIcon from "@mui/icons-material/Search";
import TextFieldWrapper from "../../components/form/formyup/TextField";

const SINGUP_FORM_INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};
const SINGUP_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Phone is required"),
  addressLine1: Yup.string().required("Address is required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
});

const Signup = () => {
  return (
    <Box gridColumn="span 8" gridRow="span 2">
      <Box style={{ margin: "0px 3%" }} gridColumn="span 12">
        <Row container={"true"}>
          <Col xs={12} sm={12} md={9}>
            <Typography
              variant="h5"
              pt={2}
              pb={3}
              borderBottom={"1px solid #8080802e"}
            >
              Signup
            </Typography>
            <Stack>
              <Box>
                <Formik
                  initialValues={SINGUP_FORM_INITIAL_STATE}
                  validationSchema={SINGUP_FORM_VALIDATION_SCHEMA}
                  onSubmit={(values) => {
                    try {
                      console.log(values);
                    } catch (error) {}
                  }}
                >
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="h6">Your details</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <TextFieldWrapper name="firstName" label="First Name" />
                      </Grid>
                      <Grid item xs={6}>
                        <TextFieldWrapper name="lastName" label="Last Name" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextFieldWrapper name="email" label="Email" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextFieldWrapper name="phone" label="Phone" />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6">Address</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <TextFieldWrapper
                          name="addressLine1"
                          label="Address Line 1"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextFieldWrapper
                          name="addressLine2"
                          label="Address Line 2"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextFieldWrapper name="city" label="City" />
                      </Grid>
                      <Grid item xs={6}>
                        <TextFieldWrapper name="state" label="State" />
                      </Grid>
                      <Grid item xs={6}>
                        <TextFieldWrapper name="country" label="Country" />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
              </Box>
            </Stack>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Box p-3>
              <Box borderLeft={"1px solid #ccc"} p-2>
                <Stack
                  sx={{
                    padding: "8px",
                    alignItems: "center",
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  <Stack direction="row" gap={2}>
                    <CgProfile size={50} />
                  </Stack>
                  <Typography pb-6>Hi, welcome, Leonard.</Typography>
                  <hr></hr>
                </Stack>
                <Stack sx={{ alignItems: "center", padding: "2px" }}>
                  RECENT NOTIFICATIONS
                  <Typography variant="subtitle2"></Typography>
                </Stack>
              </Box>
            </Box>
          </Col>
        </Row>

        <Box gridColumn="span 3" gridRow="span 2"></Box>
      </Box>
    </Box>
  );
};

export default Signup;
