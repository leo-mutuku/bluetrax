import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Stack } from "@mui/material";

const uData = [1, 4, 5, 9, 10, 13, 14];
const xLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function AreaLineChart() {
  return (
    <Stack
      direction="row"
      sx={{ width: "100%" }}
      className="custom-y-padding-bottom"
    >
      <Box sx={{ flexGrow: 1 }}>
        <LineChart
          width={350}
          height={200}
          series={[{ data: uData, area: true, showMark: false }]}
          xAxis={[{ scaleType: "point", data: xLabels, label: "Day" }]}
          yAxis={[
            {
              position: "left",
              label: "Mileage (1000 km)",
              labelStyle: { transform: "translateX(-100px) !important" },
              tickInterval: 200,
              tickFormat: (value) => `${value} km`,
            },
          ]}
          sx={{
            ".MuiLineElement-root": {
              display: "none",
            },
          }}
        />
      </Box>
    </Stack>
  );
}
