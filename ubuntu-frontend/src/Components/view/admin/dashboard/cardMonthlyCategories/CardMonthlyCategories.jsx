import { Box, Typography, useTheme } from "@mui/material";
const CardMonthlyCategories = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: "32px",
        border: "1px solid red",
        height: "352px",
        width: "90%",
        maxWidth: "380px",
        backgroundColor: theme.palette.primary.grisClaro,
      }}
    >
      <Typography variant="body1">Holanda caetgorias</Typography>
    </Box>
  );
};

export default CardMonthlyCategories;
