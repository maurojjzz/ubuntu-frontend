import { Box, useTheme, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MicrobusinessCard = () => {
  const theme = useTheme();
  return (
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
        }}
      >
        <Box
          className="Descripcion Box"
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
              EcoSenda
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
              Agroecología/ Orgánicos/ Alimentación saludable
            </Typography>
          </Box>
        </Box>
        <Box
          className="IconBox Box"
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
              pt: "4px",
            }}
          >
            <MoreVertIcon
              sx={{
                cursor: "pointer",
                height: "24px",
              }}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavigateNextIcon
              sx={{
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MicrobusinessCard;
