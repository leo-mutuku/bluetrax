import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { DefaultChartsLegend } from "@mui/x-charts/ChartsLegend";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { value: 21, label: "Garage", color: "red" },
  { value: 40, label: "Active" },
  { value: 60, label: "Yard", color: "orange" },
];

const size = {
  width: 300,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 14,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  const [isHidden, setIsHidden] = React.useState(true);
  return (
    <PieChart
      series={[
        {
          data,
          innerRadius: 30,
          arcLabel: (item) => {
            return `${item.value}`;
          },

          outerRadius: 50,
          paddingAngle: 0,
          cornerRadius: 0,
          arcLabelMinAngle: 20,
          startAngle: -180,
          endAngle: 180,
        },
      ]}
      slotProps={{ legend: { hidden: false, boxWidth: 50, boxHeight: 40 } }}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontSize: 12,
          fontWeight: "bold",
          borderRadius: "1px solid #ccc",
        },
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      {...size}
    >
      <PieCenterLabel>Total 121</PieCenterLabel>
    </PieChart>
  );
}
