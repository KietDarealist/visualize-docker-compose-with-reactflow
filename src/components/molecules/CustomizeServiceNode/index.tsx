import * as React from "react";

//styles
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import EditTool from "../../organisms/EditTool";

//hooks
import useServiceNode from "../../../hooks/useServiceNode";

interface ICustomServiceNodeProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomServiceNode: React.FC<ICustomServiceNodeProps> = (props) => {
  const { isOpen, onClose } = props;
  const {
    setLocalBackgroundColor,
    setLocalTextColor,
    setLocalBorderRadius,
    setLocalFontSize,
    setLocalFontWeight,

    localBackgroundColor,
    localBorderRadius,
    localTextColor,
    localFontSize,
    localFontWeight,
    onConfirmChangeServiceNodeStyle,
  } = useServiceNode();

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
                Customize your service node
              </Typography>
              <Typography id="modal-desc" textColor="text.tertiary">
                Styling your own node using these beautiful below
              </Typography>
              <div className="flex items-center mt-12 space-x-40">
                <div
                  style={{
                    backgroundColor: localBackgroundColor,
                    borderRadius: `${localBorderRadius}px`,
                  }}
                  className={` border-solid border  align-center min-h-[130px] max-h-
                          [250px] min-w-[200px] max-w-[220px] overflow-hidden px-2 py-4 
                          border-gray-300  flex flex-col justify-center`}
                >
                  <h4
                    style={{
                      color: localTextColor,
                      fontSize: localFontSize,
                      fontWeight: localFontWeight,
                    }}
                    className={`text-center text-sm break-word`}
                  >
                    Service name <br /> Image: Service Image
                  </h4>
                </div>
                <EditTool
                  onSelectColor={(color) => setLocalBackgroundColor(color)}
                  onSelectTextColor={(textColor) =>
                    setLocalTextColor(textColor)
                  }
                  onChangeFontSize={(fontSize) => setLocalFontSize(fontSize)}
                  onChangeFontWeight={(fontWeight) =>
                    setLocalFontWeight(fontWeight)
                  }
                  onChangeBorderRadius={(borderRadius) =>
                    setLocalBorderRadius(borderRadius)
                  }
                  handlePressConfirm={() => {
                    onConfirmChangeServiceNodeStyle();
                    onClose();
                  }}
                />
              </div>
            </Sheet>
          </Modal>
        </React.Fragment>
      ) : null}
    </>
  );
};

export default CustomServiceNode;
