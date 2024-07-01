import React, { useState } from "react";
import { Drawer, Button, List, ListItem, ListItemText,IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleDrawer = (open) => (event) => {
    setIsOpen(open);
    setAnchorEl(event.currentTarget);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Inicio", "Microemprendimientos", "Publicaciones", "Login"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        edge="start"
        color="blue"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="bottom"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            background: "#093C59",
            color: "#FDFDFE",
            top: anchorEl ? anchorEl.getBoundingClientRect().bottom : 0,
            height: `calc(100% - ${
              anchorEl ? anchorEl.getBoundingClientRect().bottom : 0
            }px)`,
            width: "16rem",
            top: "3.5rem",
          },
        }}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
