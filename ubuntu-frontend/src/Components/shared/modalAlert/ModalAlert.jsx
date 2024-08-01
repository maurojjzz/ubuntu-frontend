import { Box, Modal, useTheme } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const ModalAlert = ({type = "error"}) => {
  const theme = useTheme();

  const iconStyle = {
    color: type === "success" ? theme.palette.primary.verdeGestion : theme.palette.primary.rojo,
    fontSize: "40px",
  };

  
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
          justifyContent: "center",
          minHeight: "152px",
          minWidth: "328px",
          maxWidth: "500px",
          width: "80%",
          borderRadius: "28px",
          backgroundColor: "#fff",
          "&:focus": {
            outline: "none",
          },
        }}
      >
         {type === "error" && <CancelOutlinedIcon sx={iconStyle} />}
         {type === "success" && <CheckCircleOutlineIcon sx={iconStyle} />}
      </Box>
    </Modal>
  );
};

export default ModalAlert;
