import * as React from "react";
import MenuButton from "@mui/joy/MenuButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Apps from "@mui/icons-material/Menu";
import Dropdown from "@mui/joy/Dropdown";
import CustomizeNodeModal from "../CustomizeServiceNode";
import { Button, Typography } from "@mui/joy";
import {
  Album,
  BackHand,
  ChevronLeft,
  Close,
  DoorBack,
  DoorBackOutlined,
  Edit,
  FileDownload,
  Redo,
  Settings,
  Share,
} from "@mui/icons-material";

export default function SideMenu() {
  const createHandleClose = (index: number) => () => {
    if (typeof index === "number") {
    }
  };
  const [openCustomizeNode, setOpenCustomizeNode] =
    React.useState<boolean>(false);

  const handlePressCustomNode = () => setOpenCustomizeNode(true);

  return (
    <>
      <div className="w-[20vw] h-full flex flex-col justify-center px-4">
        {/* <Typography
          component="h4"
          id="modal-title"
          textColor="text.tertiary"
          fontWeight="lg"
          textAlign="center"
          textTransform="uppercase"
        >
          Visualize Docker With ReactFlow
        </Typography> */}
        <img
          src={require("../../../src/assets/images/logo-docker.gif")}
          alt="Image"
          className="mx-auto w-[200]"
        />
        <Button
          variant="outlined"
          color="primary"
          startDecorator={<Settings sx={{ width: 20, height: 20 }} />}
        >
          Customize Service Node
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ marginTop: 2 }}
          startDecorator={<Share sx={{ width: 20, height: 20 }} />}
        >
          Customize Network Node
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ marginTop: 2 }}
          startDecorator={<Album sx={{ width: 20, height: 20 }} />}
        >
          Customize Volume Node
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ marginTop: 2 }}
          startDecorator={<DoorBack sx={{ width: 20, height: 20 }} />}
        >
          Customize Port Node
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ marginTop: 2 }}
          startDecorator={<Redo sx={{ width: 20, height: 20 }} />}
        >
          Customize Edge Node
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ marginTop: 2 }}
          startDecorator={<FileDownload sx={{ width: 20, height: 20 }} />}
        >
          Export PDF
        </Button>
        <Button
          variant="outlined"
          color="danger"
          sx={{ marginTop: 2 }}
          startDecorator={<ChevronLeft sx={{ width: 20, height: 20 }} />}
        >
          Exit
        </Button>
      </div>

      <CustomizeNodeModal
        isOpen={openCustomizeNode}
        onClose={() => setOpenCustomizeNode(false)}
      />
    </>
  );
}
