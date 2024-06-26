import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { DefaultChartsLegend } from "@mui/x-charts/ChartsLegend";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";

const size = {
  width: 285,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 14,
}));

function PieCenterLabel({ item, title }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <>
      <StyledText
        x={left + width / 2}
        y={top + height / 2.2}
        sx={{ fontWeight: "600", fontSize: "20px" }}
      >
        1320
      </StyledText>
      <StyledText x={left + width / 2} y={top + height / 1.8}>
        Total
      </StyledText>
    </>
  );
}

export default function PieChartMedium1({ data }) {
  const [isHidden, setIsHidden] = React.useState(true);
  return (
    <Stack
      direction="row"
      sx={{ width: "90%" }}
      className="custom-y-padding-bottom"
    >
      <Box sx={{ flexGrow: 1 }}>
        <PieChart
          series={[
            {
              data,
              innerRadius: 30,
              arcLabel: (item) => {
                return `${item.value} `;
              },

              outerRadius: 50,

              arcLabelMinAngle: 30,
              arcLabelRadius: 40,
              startAngle: -180,
              endAngle: 180,
            },
          ]}
          slotProps={{
            legend: {
              hidden: false,
              labelStyle: {
                fontSize: 12,

                fill: "#11388e",
                fontWeight: "bold",
              },
              padding: 2,
              position: { vertical: "top", horizontal: "right" },
              itemMarkWidth: 10,
              itemMarkHeight: 10,
              markGap: 2,
              itemGap: 30,
            },
          }}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontSize: 12,
              fontWeight: "500",
              backgroundColor: "rgb(130, 50, 29)",
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
          <PieCenterLabel> </PieCenterLabel>
        </PieChart>
      </Box>
    </Stack>
  );
}
