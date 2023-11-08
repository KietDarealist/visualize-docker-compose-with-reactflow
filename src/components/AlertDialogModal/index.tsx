import * as React from "react";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DeleteForever from "@mui/icons-material/DeleteForever";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

interface IAlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onConfirm: () => void;
}

const AlertDialogModal: React.FC<IAlertDialogProps> = (props) => {
  const { isOpen, onClose, title, description, onConfirm } = props;
  return (
    <React.Fragment>
      <Modal open={isOpen} onClose={onClose}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <WarningRoundedIcon />
            {title}
          </DialogTitle>
          <Divider />
          <DialogContent>{description}</DialogContent>
          <DialogActions>
            <Button
              variant="solid"
              color="danger"
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              Confirm
            </Button>
            <Button variant="plain" color="neutral" onClick={onClose}>
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
};

export default AlertDialogModal;
