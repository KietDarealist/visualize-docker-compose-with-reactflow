import React from "react";
import ColorPicker from "./ColorPicker";
import TextSizeSlider from "./TextSizeSlider";
import BorderRadiusInput from "./BordeRadiusInput";
import { Button, Typography } from "@mui/joy";

interface IEditToolProps {
  onSelectColor: (color: string) => void;
  handlePressConfirm: () => void;
}

const EditTool: React.FC<IEditToolProps> = (props) => {
  const { onSelectColor } = props;
  return (
    <div className="flex space-x-10">
      <ColorPicker onPickColor={onSelectColor} />
      <TextSizeSlider />
      <div className="flex flex-col  justify-between">
        <BorderRadiusInput onPickColor={() => {}} />
        <Button sx={{ marginTop: 4 }}>Confirm</Button>
      </div>
    </div>
  );
};

export default EditTool;
