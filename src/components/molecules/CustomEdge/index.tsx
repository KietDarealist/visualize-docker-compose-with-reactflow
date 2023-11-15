import * as React from "react";

//styles
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import EditTool from "../../organisms/EditTool";

//hooks
import useEdge from "../../../hooks/useEdge";
import EditEdgeTool from "../../organisms/EditEdgeTool";

interface ICustomEdgeProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomEdge: React.FC<ICustomEdgeProps> = (props) => {
  const { isOpen, onClose } = props;
  const {
    setLocalColor,
    setLocalThickness,
    setLocalEdgeType,
    localThickness,
    localColor,
    localEdgeType,

    onConfirmChangeEdgeStyle,
  } = useEdge();

  return (
    <>
      {isOpen ? (
        <React.Fragment>
          <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={isOpen}
            onClose={onClose}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="bg-white rounded-xl px-8 py-4 ">
              <Typography
                component="h2"
                id="modal-title"
                level="h4"
                textColor="inherit"
                fontWeight="lg"
                mb={1}
              >
                Customize your edge
              </Typography>
              <Typography id="modal-desc" textColor="text.tertiary">
                Styling your own node using these beautiful below
              </Typography>
              <div className="w-[500px] h-[500px] flex justify-between">
                <EditEdgeTool
                  onSelectColor={(color) => setLocalColor(color)}
                  onSelectThickness={(thickness) =>
                    setLocalThickness(thickness)
                  }
                  onSelectType={(edgeType) => {
                    setLocalEdgeType(edgeType);
                  }}
                  handlePressConfirm={() => {
                    onClose();
                    onConfirmChangeEdgeStyle();
                  }}
                />
              </div>
            </div>
          </Modal>
        </React.Fragment>
      ) : null}
    </>
  );
};

export default CustomEdge;
