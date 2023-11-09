import React from "react";
import ColorPicker from "./ColorPicker";

interface IEditToolProps {
  onSelectColor: (color: string) => void;
}

const EditTool: React.FC<IEditToolProps> = (props) => {
  const { onSelectColor } = props;
  return (
    <div className="flex items-center">
      <ColorPicker onPickColor={onSelectColor} />
    </div>
  );
};

export default EditTool;
