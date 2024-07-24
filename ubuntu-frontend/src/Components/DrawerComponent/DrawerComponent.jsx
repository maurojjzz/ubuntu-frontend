import { useState, useEffect } from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemText, Box, useTheme, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const DrawerComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [token, setToken] = useState("");

  const theme = useTheme();

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
      {token && (
        <Typography
          variant="h5"
          color={theme.palette.primary.main}
          fontFamily={"Lato"}
          sx={{
            mt: "30px",
            ml: "16px",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "20px",
          }}
        >
          Administrador
        </Typography>
      )}

      <List>
        {!token
          ? ["Inicio", "Microemprendimientos", "Publicaciones", "Login"].map((text) => (
              <ListItemButton component={Link} to={text === "Inicio" ? "/" : `/${text.toLowerCase()}`} key={text}>
                <ListItemText
                  primary={text}
                  sx={{ fontSize: "18px", fontWeight: "700", lineHeight: "20px", fontFamily: "Lato" }}
                />
              </ListItemButton>
            ))
          : ["Dashboard Administrador", "Microemprendimientos", "Solicitudes de Contacto", "Publicaciones"].map(
              (text) => (
                <ListItemButton component={Link} to={`/admin/${text.toLowerCase().split(" ")[0]}`} key={text}>
                  <ListItemText
                    primary={text}
                    sx={{ fontSize: "18px", fontWeight: "700", lineHeight: "20px", fontFamily: "Lato" }}
                  />
                </ListItemButton>
              )
            )}
      </List>
    </Box>
  );

  useEffect(() => {
    const saveToken = localStorage.getItem("token");
    if (saveToken) {
      setToken(saveToken);
    }
  }, []);

  return (
    <Box>
      <IconButton onClick={toggleDrawer(true)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Drawer
        anchor="bottom"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            background: theme.palette.primary.azul,
            color: theme.palette.primary.main,
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
