import { Edit } from "@mui/icons-material";
import { Box, Typography } from "@mui/joy";
import React from "react";

interface IColorPickerProps {
  onPickColor: (color: string) => void;
}

const ColorPicker: React.FC<IColorPickerProps> = (props) => {
  const listColors = ["gray", "green", "yellow", "red", "blue"];
  const colorRange = [300, 400, 500, 600, 700];
  return (
    <div>
      <button className="flex items-center  mb-4">
        <Typography
          component="h4"
          id="modal-title"
          level="body-sm"
          textColor="neutral.600"
          fontWeight="md"
          mr={2}
        >
          Pick your color
        </Typography>
        <Edit sx={{ width: 20, height: 20 }} />
      </button>
      <button
        className="flex flex-wrap w-[180px] 
      "
      >
        {listColors.map((color, colorIndex) =>
          colorRange.map((colorRange, colorRandeIndex) => {
            console.log(`w-10 h-10 bg-${color}-${colorRange}`);
            return (
              <div
                className={`w-6 h-6 bg-${color}-${colorRange} mr-2 mb-2 hover:opacity-75`}
              ></div>
            );
          })
        )}
      </button>
    </div>
  );
};

export default ColorPicker;
