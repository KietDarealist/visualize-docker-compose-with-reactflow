import { Box, Slider, Typography } from "@mui/joy";
import React from "react";

interface ITextSizeSliderProps {
  handleChangeFontSize: (fontSize: number) => void;
  handleChangeFontWeight: (fontWeight: number) => void;
}

const TextSizeSlider: React.FC<ITextSizeSliderProps> = (props) => {
  const { handleChangeFontSize, handleChangeFontWeight } = props;
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

  const fontWeights = [
    {
      label: "thin",
      value: 100,
    },
    {
      label: "extralight",
      value: 200,
    },

    {
      label: "light",
      value: 300,
    },

    {
      label: "normal",
      value: 400,
    },
    {
      label: "medium",
      value: 500,
    },
    {
      label: "semibold",
      value: 600,
    },
    {
      label: "bold",
      value: 700,
    },
    {
      label: "extrabold",
      value: 800,
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
        Font Size
      </Typography>
      <Box sx={{ width: 280 }}>
        <Slider
          aria-label="Custom marks"
          defaultValue={14}
          onChange={(value) => {
            handleChangeFontSize((value.target as any).value);
          }}
          getAriaValueText={valueText}
          step={1}
          min={8}
          valueLabelDisplay="auto"
          max={24}
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
          <button onClick={() => handleChangeFontWeight(item.value)}>
            <p style={{ fontWeight: item.value }} className={`text-md`}>
              {item.label}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TextSizeSlider;
