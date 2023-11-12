import { Edit } from "@mui/icons-material";
import { Box, Typography } from "@mui/joy";
import React from "react";

interface IColorPickerProps {
  handleSelectColor: (color: string) => void;
}

const ColorPicker: React.FC<IColorPickerProps> = (props) => {
  const { handleSelectColor } = props;
  const listColors = [
    "#f3f4f6",
    "#e5e7eb",
    "#d1d5db",
    "#9ca3af",
    "#6b7280",
    "#fee2e2",
    "#fecaca",
    "#fca5a5",
    "#f87171",
    "#ef4444  ",
    "#fef9c3",
    "#fef08a",
    "#fde047",
    "#facc15",
    "#eab308",
    "#dbeafe",
    "#bae6fd",
    "#93c5fd",
    "#60a5fa",
    "#3b82f6",
    "#86efac",
    "#4ade80",
    "#22c55e",
    "#16a34a",
    "#15803d",
  ];
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
      <div
        className="flex flex-wrap w-[180px] 
      "
      >
        {listColors.map((color, colorIndex) => (
          <button
            onClick={() => handleSelectColor(color)}
            color={color}
            style={{
              backgroundColor: color,
            }}
            className={`w-6 h-6  mr-2 mb-2 hover:opacity-75`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
