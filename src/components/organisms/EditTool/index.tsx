import React from "react";
import ColorPicker from "../../atoms/ColorPicker";
import TextSizeSlider from "../../atoms/TextSizeSlider";
import BorderRadiusInput from "../../atoms/BordeRadiusInput";
import { Button } from "@mui/joy";
import TextColorPicker from "../../atoms/TextColorPicker";

interface IEditToolProps {
  onSelectColor: (color: string) => void;
  onSelectTextColor: (textColor: string) => void;
  onChangeFontSize: (fontSize: number) => void;
  onChangeFontWeight: (fontWeight: number) => void;
  onChangeBorderRadius: (borderRadius: number) => void;
  handlePressConfirm: () => void;
}

const EditTool: React.FC<IEditToolProps> = (props) => {
  const {
    onSelectColor,
    onSelectTextColor,
    onChangeFontSize,
    onChangeFontWeight,
    onChangeBorderRadius,
    handlePressConfirm,
  } = props;
  return (
    <div className="flex space-x-10">
      <ColorPicker handleSelectColor={onSelectColor} />
      <TextSizeSlider
        handleChangeFontSize={onChangeFontSize}
        handleChangeFontWeight={onChangeFontWeight}
      />
      <div className="flex flex-col  justify-between">
        <BorderRadiusInput handleChangeBorderRadius={onChangeBorderRadius} />
        <TextColorPicker handleSelectTextColor={onSelectTextColor} />
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

export default EditTool;
