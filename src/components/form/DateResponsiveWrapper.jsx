import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const DateResponsiveWrapper = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DesktopDatePicker"]}>
        <DemoItem>
          <DesktopDatePicker
            slotProps={{ textField: { size: "small" } }}
            defaultValue={dayjs("2024-03-28")}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateResponsiveWrapper;
