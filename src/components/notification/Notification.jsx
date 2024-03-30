import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import BatteryAlertIcon from "@mui/icons-material/BatteryAlert";
import { IoIosInformationCircle } from "react-icons/io";
import { MdSpeed } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { messages } from "../../data/notification";

export default function Notification() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const formatTextKey = (key) => {
    return key === "vehicle" ? (
      <></>
    ) : alert === "failure" ? (
      "red"
    ) : alert === "normal" ? (
      "blue"
    ) : (
      "pink"
    );
  };

  const formatIcon = (alert) => {
    return alert === "success" ? (
      <HiLightBulb
        size={25}
        style={{
          color: "white",
          background: "green",
          padding: "5px",
        }}
      />
    ) : alert === "failure" ? (
      <MdSpeed
        size={25}
        style={{
          color: "white",
          background: "red",
          padding: "5px",
        }}
      />
    ) : (
      <HiLightBulb
        size={25}
        style={{
          color: "white",
          background: "blue",
          padding: "5px",
        }}
      />
    );
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        maxHeight: "250px",
        overflow: "scroll",
        overflowX: "hidden",
        scrollbar: { width: "15px", height: "15px" },
        scrollbarThumb: { background: "blue" },
        scrollbarTrack: { background: "#ccc" },
        scrollbarThumbHover: { background: "#888" },
      }}
    >
      {messages.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <IoIosInformationCircle size={17} />
              </IconButton>
            }
            disablePadding
            sx={{ margin: "2px", background: "#e6f2ff96" }}
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value)}
              dense
            >
              <ListItemIcon sx={{}}>{formatIcon(value.alert)}</ListItemIcon>
              <ListItemText id={value.id} style={{ lineHeight: "0.80" }}>
                <p
                  style={{
                    fontSize: "10px",
                    marginBottom: "0px",
                    marginTop: "0px",
                    fontWeight: "900 !important",
                    color: "#ccc !important",
                  }}
                >
                  {value.vehicle}
                </p>
                <p
                  style={{
                    fontSize: "9px",
                    marginBottom: "0px",
                    marginTop: "0px",
                    fontWeight: "900 !important",
                    color: "#ccc !important",
                  }}
                >
                  {value.date}
                </p>
                <p
                  style={{
                    fontSize: "9px",
                    marginBottom: "0px",
                    marginTop: "0px",
                    fontWeight: "900 !important",
                    color: "#ccc !important",
                  }}
                >
                  {value.depot}
                </p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
