import { Box, Slider, Typography } from "@mui/joy";
import React from "react";

interface IThicknessSliderProps {
  handleChangeThickness: (fontSize: number) => void;
}

const ThicknessSlider: React.FC<IThicknessSliderProps> = (props) => {
  const { handleChangeThickness } = props;
  const fontSizes = [
    {
      value: 1,
      label: "1px",
    },
    {
      value: 5,
      label: "5px",
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
          defaultValue={1}
          onChange={(value) => {
            console.log("value is", (value.target as any).value);
            handleChangeThickness((value.target as any).value);
          }}
          getAriaValueText={valueText}
          step={1}
          min={1}
          valueLabelDisplay="auto"
          max={5}
          marks={fontSizes}
        />
      </Box>
    </div>
  );
};

export default ThicknessSlider;
