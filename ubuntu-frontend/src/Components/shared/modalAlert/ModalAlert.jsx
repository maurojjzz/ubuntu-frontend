import { Box, Modal, useTheme, Typography, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const ModalAlert = ({ status = "error" }) => {
  const theme = useTheme();

  const iconStyle = {
    color: status === "success" ? theme.palette.primary.verdeGestion : theme.palette.primary.rojo,
    fontSize: "50px",
    mt: "16px",
  };

  const buttonStyle = {
    color: theme.palette.primary.azul,
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "20px",
    textTransform: "none",
    fontFamily: "Lato",
  }


  return (
    <Modal
      open={true}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "152px",
          minWidth: "328px",
          maxWidth: "500px",
          width: "80%",
          borderRadius: "28px",
          backgroundColor: "#fff",
          "&:focus": {
            outline: "none",
          },
          pb: "10px",
        }}
      >
        {status === "error" && <CancelOutlinedIcon sx={iconStyle} />}
        {status === "success" && <CheckCircleOutlineIcon sx={iconStyle} />}
        <Typography
          variant="p"
          sx={{
            mt: "16px",
            fontWeight: "400",
            fontFamily: "Lato",
            fontSize: "18px",
            lineHeight: "28px",
            mb: "12px",
            width: "80%",
          }}
        >
          Some text that should be here
        </Typography>
        <Box
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button variant="text" sx={buttonStyle} >
            {status==="success" ? "Acepar" : "Cancelar"}
          </Button>
          {status === "error" && (
            <Button variant="text" sx={buttonStyle} >
              Intentar nuevamente
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalAlert;
