import { Box, Slider, Typography } from "@mui/joy";
import React from "react";

interface ITextSizeSliderProps {}

const TextSizeSlider: React.FC<ITextSizeSliderProps> = (props) => {
  const fontSizes = [
    {
      value: 16,
      label: "16px",
    },
    {
      value: 32,
      label: "32px",
    },
    {
      value: 48,
      label: "48px",
    },
    {
      value: 64,
      label: "64px",
    },
  ];

  const fontWeights = [
    "extralight",
    "light",
    "thin",
    "normal",
    "medium",
    "semibold",
    "bold",
    "extrabold",
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
        Font Size
      </Typography>
      <Box sx={{ width: 280 }}>
        <Slider
          aria-label="Custom marks"
          defaultValue={4}
          onChange={(value) => {
            console.log("value is", (value.target as any).value);
          }}
          getAriaValueText={valueText}
          step={4}
          valueLabelDisplay="auto"
          max={80}
          marks={fontSizes}
        />
      </Box>

      <Typography
        component="h4"
        id="modal-title"
        level="body-sm"
        textColor="neutral.600"
        fontWeight="lg"
        mt={4}
      >
        Font Weight
      </Typography>
      <div className="flex gap-x-2 gap-y-1 max-w-[200px] flex-wrap mt-1">
        {fontWeights.map((item, index) => (
          <p className={`font-${item} text-md`}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default TextSizeSlider;
