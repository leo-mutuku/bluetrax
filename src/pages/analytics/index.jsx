import React from "react";
import { Row, Col } from "react-bootstrap";
import { Box, Typography, Grid, Card, Stack } from "@mui/material";
import Item from "@mui/material/Grid";
import Profile from "../../assets/leo.jpeg";
import { NavLink } from "react-router-dom";
import InputWithIcon from "../../components/form/InputWithIcon";
import SearchButtonWrapper from "../../components/form/SearchButtonWrapper";
import DateResponsiveWrapper from "../../components/form/DateResponsiveWrapper";
import PieChart from "../../components/charts/PieChart";
import SearchIcon from "@mui/icons-material/Search";
import AreaLineChart from "../../components/charts/AreaLineChart";
import ComboBox from "../../components/form/ComboBox";

const Analytics = () => {
  return (
    <>
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
                Analytics
              </Typography>
              <Typography>
                Simple form with Autocomplete select input
              </Typography>
              <Stack direction={"row"}>
                <ComboBox />
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
                    <img
                      src={Profile}
                      style={{ width: "100px", borderRadius: "50%" }}
                    />
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
    </>
  );
};

export default Analytics;
