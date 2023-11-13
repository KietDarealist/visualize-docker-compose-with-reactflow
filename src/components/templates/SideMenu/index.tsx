import * as React from "react";
import MenuButton from "@mui/joy/MenuButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Apps from "@mui/icons-material/Menu";
import Dropdown from "@mui/joy/Dropdown";
import CustomServiceNode from "../../molecules/CustomizeServiceNode";
import { Button, Typography } from "@mui/joy";
import {
  Album,
  ChevronLeft,
  DoorBack,
  FileDownload,
  Redo,
  Settings,
  Share,
} from "@mui/icons-material";
import AlertDialogModal from "../../molecules/AlertDialogModal";
import CustomNetworkNode from "../../molecules/CustomNetworkNode";
import CustomVolumeNode from "../../molecules/CustomModal/CustomVolumeNode";
import CustomPortNode from "../../molecules/CustomPortNode";
import CustomEdge from "../../molecules/CustomEdge";

interface ISideMenuProps {
  handlePressExit: () => void;
}

const SideMenu: React.FC<ISideMenuProps> = (props) => {
  const { handlePressExit } = props;

  const [openCustomizeNode, setOpenCustomizeNode] =
    React.useState<boolean>(false);
  const [openCustomNetworkNode, setOpenCustomNetworkNode] =
    React.useState<boolean>(false);
  const [openCustomVolumeNode, setOpenCustomVolumeNode] =
    React.useState<boolean>(false);
  const [openCustomPortNode, setOpenCustomPortNode] =
    React.useState<boolean>(false);
  const [openCustomEdge, setOpenCustomEdge] = React.useState<boolean>(false);
  const [openAlertExit, setOpenAlertExit] = React.useState<boolean>(false);

  const handlePressCutomServiceNode = () => setOpenCustomizeNode(true);
  const handlePressCustomNetworkNode = () => setOpenCustomNetworkNode(true);
  const handlePressCustomVolumeNode = () => setOpenCustomVolumeNode(true);
  const handlePressCustomPortNode = () => setOpenCustomPortNode(true);
  const handlePressCustomEdge = () => setOpenCustomEdge(true);
  const handlePressExport = () => setOpenCustomizeNode(true);

  return (
    <>
      <div className="w-[20vw] h-full flex flex-col justify-center px-4">
        <img
          src={require("../../../assets/images/logo-docker.gif")}
          alt="Image"
          className="mx-auto w-[200]"
        />
        <Button
          variant="outlined"
          color="primary"
          startDecorator={<Settings sx={{ width: 20, height: 20 }} />}
          onClick={handlePressCutomServiceNode}
        >
          Customize Service Node
        </Button>
        <Button
          onClick={handlePressCustomNetworkNode}
          variant="outlined"
          color="primary"
          sx={{ marginTop: 2 }}
          startDecorator={<Share sx={{ width: 20, height: 20 }} />}
        >
          Customize Network Node
        </Button>
        <Button
          onClick={handlePressCustomVolumeNode}
          variant="outlined"
          color="primary"
          sx={{ marginTop: 2 }}
          startDecorator={<Album sx={{ width: 20, height: 20 }} />}
        >
          Customize Volume Node
        </Button>
        <Button
          onClick={handlePressCustomPortNode}
          variant="outlined"
          color="primary"
          sx={{ marginTop: 2 }}
          startDecorator={<DoorBack sx={{ width: 20, height: 20 }} />}
        >
          Customize Port Node
        </Button>
        <Button
          onClick={handlePressCustomEdge}
          variant="outlined"
          color="primary"
          sx={{ marginTop: 2 }}
          startDecorator={<Redo sx={{ width: 20, height: 20 }} />}
        >
          Customize Edge
        </Button>
        <Button
          onClick={handlePressExport}
          variant="outlined"
          color="neutral"
          sx={{ marginTop: 2 }}
          startDecorator={<FileDownload sx={{ width: 20, height: 20 }} />}
        >
          Export PDF
        </Button>
        <Button
          onClick={() => setOpenAlertExit(true)}
          variant="outlined"
          color="danger"
          sx={{ marginTop: 2 }}
          startDecorator={<ChevronLeft sx={{ width: 20, height: 20 }} />}
        >
          Exit
        </Button>
      </div>

      <CustomServiceNode
        isOpen={openCustomizeNode}
        onClose={() => setOpenCustomizeNode(false)}
      />

      <CustomNetworkNode
        isOpen={openCustomNetworkNode}
        onClose={() => setOpenCustomNetworkNode(false)}
      />

      <CustomVolumeNode
        isOpen={openCustomVolumeNode}
        onClose={() => setOpenCustomVolumeNode(false)}
      />

      <CustomPortNode
        isOpen={openCustomPortNode}
        onClose={() => setOpenCustomPortNode(false)}
      />

      <CustomEdge
        isOpen={openCustomEdge}
        onClose={() => setOpenCustomEdge(false)}
      />

      <AlertDialogModal
        isOpen={openAlertExit}
        title="Are you sure"
        description="All your progress will be losing if you exit"
        onClose={() => setOpenAlertExit(false)}
        onConfirm={handlePressExit}
      />
    </>
  );
};

export default SideMenu;
