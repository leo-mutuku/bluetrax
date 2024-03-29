import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const uData = [500, 650, 740, 800, 1000, 1200, 1800];
const xLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function AreaLineChart() {
  return (
    <LineChart
      width={300}
      height={200}
      series={[{ data: uData, area: true, showMark: false }]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      sx={{
        ".MuiLineElement-root": {
          display: "none",
        },
      }}
    />
  );
}
