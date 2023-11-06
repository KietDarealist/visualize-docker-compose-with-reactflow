import * as React from "react";
import MenuButton from "@mui/joy/MenuButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Apps from "@mui/icons-material/Apps";
import Dropdown from "@mui/joy/Dropdown";

export default function SelectedMenu() {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(1);

  const createHandleClose = (index: number) => () => {
    if (typeof index === "number") {
      setSelectedIndex(index);
    }
  };

  return (
    <div className="absolute bottom-auto top-10 left-auto right-20">
      <Dropdown>
        <MenuButton startDecorator={<Apps />}>Menu</MenuButton>
        <Menu>
          <MenuItem
            {...(selectedIndex === 0 && {
              selected: true,
              variant: "solid",
              color: "primary",
            })}
            onClick={createHandleClose(0)}
          >
            Random project
          </MenuItem>
          <MenuItem
            selected={selectedIndex === 1}
            onClick={createHandleClose(1)}
          >
            Production - web
          </MenuItem>
          <MenuItem
            selected={selectedIndex === 2}
            onClick={createHandleClose(2)}
          >
            Staging - web
          </MenuItem>
        </Menu>
      </Dropdown>
    </div>
  );
}
