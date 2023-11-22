import { Edit } from "@mui/icons-material";
import { Box, Slider, Typography } from "@mui/joy";
import React from "react";

interface IColorPickerProps {
  handleChangeBorderRadius: (borderRadius: number) => void;
}

const BorderRadiusInput: React.FC<IColorPickerProps> = (props) => {
  const { handleChangeBorderRadius } = props;
  const fontSizes = [
    {
      value: 5,
      label: "5px",
    },
    {
      value: 24,
      label: "24px",
    },
    {
      value: 40,
      label: "40px",
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
        Border Radius
      </Typography>
      <Box sx={{ width: 280 }}>
        <Slider
          aria-label="Custom marks"
          defaultValue={24}
          onChange={(value) => {
            handleChangeBorderRadius((value.target as any).value);
          }}
          getAriaValueText={valueText}
          step={5}
          valueLabelDisplay="auto"
          max={100}
          marks={fontSizes}
        />
      </Box>
    </div>
  );
};

export default BorderRadiusInput;
