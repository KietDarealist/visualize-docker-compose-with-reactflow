import * as React from "react";
import MenuButton from "@mui/joy/MenuButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Apps from "@mui/icons-material/Menu";
import Dropdown from "@mui/joy/Dropdown";
import CustomizeNodeModal from "../CustomizeNodeModal";

export default function SelectedMenu() {
  const createHandleClose = (index: number) => () => {
    if (typeof index === "number") {
    }
  };
  const [openCustomizeNode, setOpenCustomizeNode] =
    React.useState<boolean>(false);

  const handlePressCustomNode = () => setOpenCustomizeNode(true);

  return (
    <>
      <div className="absolute bottom-auto top-10 left-auto right-20">
        <Dropdown>
          <MenuButton color="primary" size="lg" startDecorator={<Apps />}>
            Tool Bar
          </MenuButton>
          <Menu>
            <MenuItem onClick={handlePressCustomNode}>Customize Node</MenuItem>
            <MenuItem>Customize Edge</MenuItem>
            <MenuItem>Export Image</MenuItem>
          </Menu>
        </Dropdown>
      </div>

      <CustomizeNodeModal
        isOpen={openCustomizeNode}
        onClose={() => setOpenCustomizeNode(false)}
      />
    </>
  );
}
