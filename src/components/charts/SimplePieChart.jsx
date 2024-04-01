import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { value: 76, label: "Agggggghhhhhhh" },
  { value: 10, label: "Bhhhhhh" },
  { value: 15, label: "Chhhhh" },
  { value: 20, label: "Dhhhh" },
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));
const total = data.reduce((acc, item) => acc + item.value, 0);
function PieCenterLabel({ total }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <>
      <StyledText x={left + width / 2} y={top + height / 2.3}>
        {total}
      </StyledText>
      <StyledText x={left + width / 2} y={top + height / 1.7}>
        Total
      </StyledText>
    </>
  );
}

export default function SimplePieChart() {
  return (
    <PieChart
      series={[
        {
          data,
          innerRadius: 60,
          arcLabel: (item) => {
            return `${item.value}`;
          },
        },
      ]}
      {...size}
      slotProps={{
        legend: {
          direction: "column",
          position: {
            vertical: "middle",
            horizontal: "right",
          },
          itemMarkWidth: 11,
          itemMarkHeight: 7,
          markGap: 2,
          itemGap: 6,
        },
      }}
    >
      <PieCenterLabel></PieCenterLabel>
    </PieChart>
  );
}
