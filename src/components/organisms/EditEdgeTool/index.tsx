import React from "react";
import ColorPicker from "../../atoms/ColorPicker";
import TextSizeSlider from "../../atoms/TextSizeSlider";
import BorderRadiusInput from "../../atoms/BordeRadiusInput";
import { Button } from "@mui/joy";
import TextColorPicker from "../../atoms/TextColorPicker";
import ThicknessSlider from "../../atoms/ThicknessSlider";
import EdgeTypePicker from "../../atoms/EdgeTypePicker";

interface IEditEdgeToolProps {
  onSelectColor: (color: string) => void;
  onSelectThickness: (thickness: number) => void;
  onSelectType: (type: string) => void;
  handlePressConfirm: () => void;
}

const EditEdgeTool: React.FC<IEditEdgeToolProps> = (props) => {
  const { onSelectColor, onSelectThickness, onSelectType, handlePressConfirm } =
    props;
  return (
    <div className="flex space-x-10">
      <ColorPicker handleSelectColor={onSelectColor} />
      <ThicknessSlider handleChangeThickness={onSelectThickness} />
      <div className="flex flex-col  justify-between">
        <EdgeTypePicker />
        <Button
          onClick={() => {
            handlePressConfirm();
          }}
          sx={{ marginTop: 4 }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default EditEdgeTool;
