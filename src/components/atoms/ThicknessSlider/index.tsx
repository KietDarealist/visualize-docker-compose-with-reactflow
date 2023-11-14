import { Box, Slider, Typography } from "@mui/joy";
import React from "react";

interface IThicknessSliderProps {
  handleChangeThickness: (fontSize: number) => void;
}

const ThicknessSlider: React.FC<IThicknessSliderProps> = (props) => {
  const { handleChangeThickness } = props;
  const fontSizes = [
    {
      value: 8,
      label: "8px",
    },
    {
      value: 16,
      label: "16px",
    },
    {
      value: 24,
      label: "24px",
    },
  ];

  function valueText(value: number) {
    return `${value}px`;
  }

  return (
    <div>
      <Typography
        component="h4"
        id="modal-title"
        level="body-sm"
        textColor="neutral.600"
        fontWeight="lg"
      >
        Thickness
      </Typography>
      <Box sx={{ width: 280 }}>
        <Slider
          aria-label="Custom marks"
          defaultValue={14}
          onChange={(value) => {
            console.log("value is", (value.target as any).value);
            handleChangeThickness((value.target as any).value);
          }}
          getAriaValueText={valueText}
          step={1}
          min={8}
          valueLabelDisplay="auto"
          max={24}
          marks={fontSizes}
        />
      </Box>
    </div>
  );
};

export default ThicknessSlider;
