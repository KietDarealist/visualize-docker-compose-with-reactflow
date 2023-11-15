import { Button, Typography } from "@mui/joy";
import React from "react";

interface IEdgeTypePickerProps {
  handleSelectEdgeType: (edgeType: string) => void;
}

const EdgeTypePicker: React.FC<IEdgeTypePickerProps> = (props) => {
  const { handleSelectEdgeType } = props;
  const edgeTypes = ["default", "straight", "step", "smoothstep"];

  return (
    <div style={{ flexDirection: "row", flexWrap: "wrap", width: 200 }}>
      <Typography
        component="h4"
        id="modal-title"
        level="body-sm"
        textColor="neutral.600"
        fontWeight="lg"
        mb={2}
      >
        Select Edge Type
      </Typography>
      {edgeTypes.map((item, index) => (
        <Button
          onClick={() => handleSelectEdgeType(item)}
          title={item}
          type="button"
          variant="outlined"
          color="neutral"
          sx={{ marginRight: 1, marginBottom: 1 }}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default EdgeTypePicker;
