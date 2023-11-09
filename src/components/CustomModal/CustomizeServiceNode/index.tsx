import * as React from "react";

//styles
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import EditTool from "../../EditTool";

//hooks
import useStyles from "../../../hooks/useStyles";

interface ICustomServiceNodeProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomServiceNode: React.FC<ICustomServiceNodeProps> = (props) => {
  const { isOpen, onClose } = props;
  const { serviceNodeStyle, dispatchSetServiceStyle } = useStyles();

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
                  className=" border-solid border  align-center min-h-[130px] max-h-
                          [250px] min-w-[200px] max-w-[220px] overflow-hidden px-2 py-4 rounded-3xl 
                          border-gray-300 bg-gray-100 flex flex-col justify-center "
                >
                  <Typography
                    id="modal-desc"
                    textColor="text.black"
                    fontSize="sm"
                    textAlign="center"
                  >
                    Serivce Name
                  </Typography>
                  <h4 className="text-center text-sm break-words text-gray-600 font-normal">
                    Image: Service Image
                  </h4>
                </div>
                <EditTool onSelectColor={() => {}} />
              </div>
            </Sheet>
          </Modal>
        </React.Fragment>
      ) : null}
    </>
  );
};

export default CustomServiceNode;
