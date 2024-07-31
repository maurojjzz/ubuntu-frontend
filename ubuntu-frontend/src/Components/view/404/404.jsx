import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const Error = () => {

    const theme = useTheme();

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "80vh", 
            textAlign: "center",
        }}>
            <Typography sx={{ typography: "h1", color: theme.palette.primary.azul}}>
                404
            </Typography>
            <Typography className="text" sx={{ typography: "h3", color: theme.palette.primary.azul }}>
                Route not found
            </Typography>
        </div>
    );
};

export default Error;
