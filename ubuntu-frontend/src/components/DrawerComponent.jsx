import React, { useState } from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const DrawerComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleDrawer = (open) => (event) => {
    setIsOpen(open);
    setAnchorEl(event.currentTarget);
  };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
      {["Inicio", "Microemprendimientos", "Publicaciones", "Login"].map((text) => (
  <ListItemButton 
    component={Link} 
    to={text === "Inicio" ? "/" : `/${text.toLowerCase()}`} 
    key={text}
  >
    <ListItemText primary={text} />
  </ListItemButton>
))}
      </List>
    </Box>
  );

  return (
    <Box>
      <IconButton
        onClick={toggleDrawer(true)}
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Drawer
        anchor="bottom"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            background: "#093C59",
            color: "#FDFDFE",
            top: "7vh",
            height: `calc(100% - ${anchorEl ? anchorEl.getBoundingClientRect().bottom : 0}px)`,
            width: "16rem",
          },
        }}
      >
        {list()}
      </Drawer>
    </Box>
  );
};

export default DrawerComponent;