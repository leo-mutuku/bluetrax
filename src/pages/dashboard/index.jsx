import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Box, Typography, Grid, Card, Stack } from "@mui/material";
import InputWithIcon from "../../components/form/InputWithIcon";
import SearchButtonWrapper from "../../components/form/SearchButtonWrapper";
import DateResponsiveWrapper from "../../components/form/DateResponsiveWrapper";
import PieChart from "../../components/charts/PieChart";
import DatePicker from "../../components/form/DatePicker";
import AreaLineChart from "../../components/charts/AreaLineChart";
import { CgProfile } from "react-icons/cg";
import SingleDate from "../../components/form/SingleDate";
import ButtonWithIcon from "../../components/form/ButtonWithIcon";
import Notification from "../../components/notification/Notification";
import PieChartMedium from "../../components/charts/PieChartMedium";
import PieChartSmall from "../../components/charts/PieChartSmall";

const assetStatus = [
  { value: 21, label: "Garage", color: " #b30000" },
  { value: 40, label: "Active", color: "#009999" },
  { value: 60, label: "Yard", color: "orange" },
];
const fleetMileage = [
  { value: 21, label: "Garage", color: "red" },
  { value: 40, label: "Active" },
  { value: 60, label: "Yard", color: "orange" },
];
const totalViolations = [
  { value: 50, label: "Night Drive", color: "red" },
  { value: 615, label: "Harsh Acceleration" },
  { value: 610, label: "Harsh Braking", color: "orange" },
  { value: 45, label: "Spending", color: "orange" },
];
const licenses = [
  { value: 500, label: "Ok", color: "#00b300" },
  { value: 15, label: "In 1 Month", color: "#b30059" },
  { value: 35, label: "In 2 Months", color: " #009999" },
  { value: 50, label: "In 4 Months", color: "orange" },
];
const alertSummary = [
  { value: 21, label: "Garage", color: "red" },
  { value: 40, label: "Active" },
  { value: 60, label: "Yard", color: "orange" },
];
const assetServiceSummary = [
  { value: 21, label: "Garage", color: "red" },
  { value: 40, label: "Active" },
  { value: 60, label: "Yard", color: "orange" },
];

const Dashboard = () => {
  const [dateRange, setDateRange] = useState("dd-mm-yyyy - dd-mm-yyyy");
  return (
    <>
      <Box gridColumn="span 8" gridRow="span 2">
        <Box style={{ margin: "0px 2%" }} gridColumn="span 12">
          <Row container={"true"}>
            <Col
              xs={12}
              sm={12}
              md={9}
              style={{ borderRight: "1px solid #ccc" }}
            >
              <Typography
                variant="h5"
                pt={2}
                pb={3}
                borderBottom={"1px solid #8080802e"}
              >
                Dashboard
              </Typography>
              <Row>
                <Col>
                  <Stack direction="row" spacing={1}>
                    <InputWithIcon />
                    <SearchButtonWrapper />
                  </Stack>
                </Col>
                <Col sm={2}>
                  <Stack direction="row" mt={2} sx={{ alignItems: "flex-end" }}>
                    <SingleDate />
                  </Stack>
                </Col>
              </Row>

              <Row>
                <Col xs={12} sm={6} md={4}>
                  <Box py={3}>
                    <Box
                      sx={{
                        background: " #e6f2ff",
                        padding: "15px",
                        minHeight: "300px",
                      }}
                    >
                      <Stack sx={{ alignItems: "flex-start" }}>
                        {" "}
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "rgba(14, 54, 141, 0.99)" }}
                        >
                          Asset Status
                        </Typography>
                      </Stack>
                      <Stack sx={{ alignItems: "center" }}>
                        <PieChart data={assetStatus} />
                      </Stack>
                      <Stack sx={{ alignItems: "flex-end", marginTop: "10px" }}>
                        <ButtonWithIcon buttonName={"Current Status"} />
                      </Stack>
                    </Box>
                  </Box>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Box py={3}>
                    <Box
                      sx={{
                        background: " #e6f2ff",
                        padding: "15px",
                        minHeight: "300px",
                      }}
                    >
                      <Stack sx={{ alignItems: "flex-start" }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "rgba(14, 54, 141, 0.99)" }}
                        >
                          Fleet Mileage
                        </Typography>
                      </Stack>
                      <Stack sx={{ alignItems: "flex-end" }}>
                        <DatePicker />
                      </Stack>
                      <Stack sx={{ alignItems: "center" }}>
                        <AreaLineChart />
                      </Stack>
                      <Stack sx={{ alignItems: "flex-end" }}>
                        <ButtonWithIcon buttonName={"Movement"} />
                      </Stack>
                    </Box>
                  </Box>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Box py={3}>
                    <Box
                      sx={{
                        background: " #e6f2ff",
                        padding: "15px",
                        minHeight: "300px",
                      }}
                    >
                      <Stack sx={{ alignItems: "flex-start" }}>
                        {" "}
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "rgba(14, 54, 141, 0.99)" }}
                        >
                          Total Violations
                        </Typography>
                      </Stack>
                      <Stack sx={{ alignItems: "center" }}>
                        <PieChartMedium data={totalViolations} />
                      </Stack>
                      <Stack sx={{ alignItems: "flex-end", marginTop: "10px" }}>
                        <ButtonWithIcon buttonName={"Violations"} />
                      </Stack>
                    </Box>
                  </Box>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6} md={4}>
                  <Box py={3}>
                    <Box
                      sx={{
                        background: " #e6f2ff",
                        padding: "15px",
                        minHeight: "300px",
                      }}
                    >
                      <Stack sx={{ alignItems: "flex-start" }}>
                        {" "}
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "rgba(14, 54, 141, 0.99)" }}
                        >
                          Licenses
                        </Typography>
                      </Stack>
                      <Stack sx={{ alignItems: "center" }}>
                        <PieChartSmall data={licenses} />
                      </Stack>
                      <Stack sx={{ alignItems: "flex-end" }}>
                        <ButtonWithIcon buttonName={"Current Status"} />
                      </Stack>
                    </Box>
                  </Box>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Box py={3}>
                    <Box
                      sx={{
                        background: " #e6f2ff",
                        padding: "15px",
                        minHeight: "300px",
                      }}
                    >
                      <Stack sx={{ alignItems: "flex-start" }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "rgba(14, 54, 141, 0.99)" }}
                        >
                          Alert Summary
                        </Typography>
                      </Stack>
                      <Stack sx={{ alignItems: "flex-end" }}>
                        <DatePicker />
                      </Stack>
                      <Stack sx={{ alignItems: "center" }}>
                        <AreaLineChart />
                      </Stack>
                      <Stack sx={{ alignItems: "flex-end" }}>
                        <ButtonWithIcon buttonName={"Movement"} />
                      </Stack>
                    </Box>
                  </Box>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Box py={3}>
                    <Box
                      sx={{
                        background: " #e6f2ff",
                        padding: "15px",
                        minHeight: "300px",
                      }}
                    >
                      <Stack sx={{ alignItems: "flex-start" }}>
                        {" "}
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "rgba(14, 54, 141, 0.99)" }}
                        >
                          Asset Service Summary
                        </Typography>
                      </Stack>
                      <Stack sx={{ alignItems: "center" }}>
                        <PieChartMedium data={assetServiceSummary} />
                      </Stack>
                      <Stack sx={{ alignItems: "flex-end" }}>
                        <ButtonWithIcon buttonName={"Violations"} />
                      </Stack>
                    </Box>
                  </Box>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Box>
                <Box>
                  <Stack
                    sx={{
                      alignItems: "center",
                    }}
                  >
                    <Stack direction="row" sx={{ alignItems: "center" }}>
                      <CgProfile size={150} color="#ccc" />
                    </Stack>
                    <Stack
                      py={2}
                      sx={{
                        alignItems: "center",
                        fontSize: "11px",
                        fontWeight: "400",
                      }}
                    >
                      <Typography variant="subtitle1" color={"#11388e"}>
                        Hi welcome, David.{" "}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    pt={2}
                    sx={{
                      alignItems: "center",
                      borderTop: "1px solid #ccc",
                    }}
                  >
                    <Typography
                      variant="button"
                      display="block"
                      gutterBottom
                      color={"#898686"}
                      fontWeight={900}
                      sx={{ fontSize: "12px", fontWeight: "700" }}
                    >
                      RECENT NOTIFICATIONS
                    </Typography>
                  </Stack>
                  <Stack>
                    <Notification />
                  </Stack>
                </Box>
              </Box>
            </Col>
          </Row>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
