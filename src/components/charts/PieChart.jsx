import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { DefaultChartsLegend } from "@mui/x-charts/ChartsLegend";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";

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

export default function PieChartWithCenterLabel({ data }) {
  const [isHidden, setIsHidden] = React.useState(true);
  return (
    <Stack
      direction="row"
      sx={{ width: "100%" }}
      className="custom-y-padding-bottom"
    >
      <Box sx={{ flexGrow: 1 }}>
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
          slotProps={{
            legend: {
              hidden: false,
              labelStyle: {
                fontSize: 10,
                fill: "#11388e",
                fontWeight: "bold",
              },
              position: { vertical: "top", horizontal: "right" },
            },
          }}
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
          <PieCenterLabel>121 Total</PieCenterLabel>
        </PieChart>
      </Box>
    </Stack>
  );
}
