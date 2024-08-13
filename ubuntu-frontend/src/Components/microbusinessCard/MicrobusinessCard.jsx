import { useState } from "react";
import { Box, useTheme, Typography, IconButton, Grow } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import OptionBox from "./optionBox/OptionBox";
import EditarMicroemprendimiento from "../../components/view/admin/microemprendimiento/EditarMicroemprendimiento";

const MicrobusinessCard = ({ id, title, category, onEditSuccess }) => {
  const [focused, setFocused] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleFocus = () => {
    setFocused(!focused);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleEditSuccess = (updatedMicrobusiness) => {
    onEditSuccess(updatedMicrobusiness);
    setEditing(false);
  };

  const theme = useTheme();
  return (
    <Box>
      {editing ? (
        <EditarMicroemprendimiento
          microBusinessId={id}
          onEditSuccess={handleEditSuccess}
        />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            minWidth: "328px",
            maxWidth: "500px",
            height: "136px",
            backgroundColor: theme.palette.primary.grisClaro,
            borderRadius: "8px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "100%",
              py: "8px",
              pl: "20px",
              pr: "16px",
              minWidth: "136px",
              width: "95%",
              position: "relative",
            }}
          >
            <Grow in={focused} timeout={10}>
              <Box>
                <OptionBox setFocused={setFocused} onEdit={handleEdit} />
              </Box>
            </Grow>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "48px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Lato",
                    color: theme.palette.primary.azul,
                    fontWeight: "700",
                    fontSize: "18px",
                    lineHeight: "24px",
                    mt: "6px",
                  }}
                >
                  {title}
                </Typography>
                <Box
                  sx={{
                    borderBottom: `2px solid ${theme.palette.primary.verdeCards}`,
                    minWidth: "200px",
                    width: "70%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  overflow: "hidden",
                  height: "70px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Lato",
                    color: theme.palette.primary.negro,
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "24px",
                    maxWidth: "290px",
                    height: "fit-content",
                  }}
                >
                  {category}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "30px",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  height: "48px",
                  pt: "10px",
                }}
              >
                <IconButton
                  sx={{
                    height: "24px",
                    width: "24px",
                    backgroundColor: focused ? theme.palette.primary.azul : "transparent",
                    "&:hover": {
                      backgroundColor: focused
                        ? theme.palette.primary.azul
                        : theme.palette.primary.grisMedio,
                    },
                    "& .MuiSvgIcon-root": {
                      color: focused
                        ? theme.palette.primary.main
                        : theme.palette.primary.negro,
                    },
                  }}
                  onClick={handleFocus}
                >
                  <MoreVertIcon
                    sx={{
                      height: "20px",
                      color: theme.palette.primary.negro,
                    }}
                  />
                </IconButton>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconButton
                  sx={{
                    height: "24px",
                    width: "24px",
                  }}
                >
                  <NavigateNextIcon
                    sx={{
                      height: "20px",
                      color: theme.palette.primary.negro,
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MicrobusinessCard;