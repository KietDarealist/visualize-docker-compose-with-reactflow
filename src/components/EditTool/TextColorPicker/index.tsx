import { Select, Option, Typography } from "@mui/joy";
import React from "react";

interface ITextColorPickerProps {
  handleSelectTextColor: (textColor: string) => void;
}

const TextColorPicker: React.FC<ITextColorPickerProps> = (props) => {
  const { handleSelectTextColor } = props;
  return (
    <>
      <Typography
        component="h4"
        id="modal-title"
        level="body-sm"
        textColor="neutral.600"
        fontWeight="lg"
        mt={4}
      >
        Text Color
      </Typography>
      <Select
        defaultValue="black"
        onChange={(event, newValue) =>
          handleSelectTextColor(newValue as string)
        }
      >
        <Option value="white">White</Option>
        <Option value="black">Black</Option>
      </Select>
    </>
  );
};

export default TextColorPicker;
