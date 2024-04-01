import React from "react";
import { Box } from "@mui/material";
import Logo from "../../../assets/bluetrax.png";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const TopMenu = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      style={{
        background: "rgb(14 54 141 / 99%)",
        padding: "8px",
      }}
    >
      <Box style={{ margin: " 0px 3% " }} display={"flex"} gap={3}>
        <img src={Logo} style={{ maxHeight: "20px" }} />

        <NavLink
          to={"/dashboard"}
          style={{ color: "white", textDecoration: "none" }}
          className={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              visualViewport: isTransitioning ? "slide" : "",
            };
          }}
        >
          <Typography>Dashboard</Typography>
        </NavLink>
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          className={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              visualViewport: isTransitioning ? "slide" : "",
            };
          }}
          to={"/tracking"}
        >
          <Typography>Tracking</Typography>{" "}
        </NavLink>
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          className={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              visualViewport: isTransitioning ? "slide" : "",
            };
          }}
          to={"/analytics"}
        >
          <Typography>Analytics</Typography>{" "}
        </NavLink>
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          className={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              visualViewport: isTransitioning ? "slide" : "",
            };
          }}
          to={"/modal"}
        >
          <Typography>Modal</Typography>{" "}
        </NavLink>
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          className={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              visualViewport: isTransitioning ? "slide" : "",
            };
          }}
          to={"/form"}
        >
          <Typography>Form</Typography>{" "}
        </NavLink>
      </Box>
    </Box>
  );
};

export default TopMenu;
