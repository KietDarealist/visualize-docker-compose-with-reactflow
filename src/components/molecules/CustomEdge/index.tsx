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
  const { setLocalColor, setLocalThickness, localThickness, localColor } =
    useEdge();

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
            <Sheet
              variant="outlined"
              sx={{
                minWidth: 1200,
                minHeight: 200,
                borderRadius: "md",
                p: 3,
                boxShadow: "lg",
              }}
            >
              <ModalClose variant="plain" sx={{ m: 1 }} />
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
              <div className="flex items-center mt-12 space-x-40">
                <div>
                  <div
                    style={{
                      position: "absolute",
                      transform: `translate(-50%, -50%) translate(${100}px,${200}px)`,
                      fontSize: 12,
                      // everything inside EdgeLabelRenderer has no pointer events by default
                      // if you have an interactive element, set pointer-events: all
                      pointerEvents: "all",
                    }}
                    className="nodrag nopan"
                  ></div>
                </div>
                <EditEdgeTool
                  onSelectColor={(color) => {}}
                  onSelectThickness={() => {}}
                  onSelectType={() => {}}
                  handlePressConfirm={() => {}}
                />
              </div>
            </Sheet>
          </Modal>
        </React.Fragment>
      ) : null}
    </>
  );
};

export default CustomEdge;
