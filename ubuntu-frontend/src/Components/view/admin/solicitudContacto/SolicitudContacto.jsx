import { Box, Typography } from "@mui/material";
import theme from "../../../../theme/theme";
import { useState } from "react";

function SolicitudContacto() {
    const [selectedOption, setSelectedOption] = useState("No gestionadas");

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "3vh",
            paddingTop: "3vh",
            paddingLeft: "3vw",
            paddingRight: "3vw",
        }} className="solicitudContacto__Container">
            <Box className="solicitudContacto__Title">
                <Typography sx={{
                    fontFamily: 'Lato',
                    fontSize: '28px',
                    fontWeight: '500',
                    lineHeight: '35px',
                }}>Solicitudes de contacto</Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row", // Corrected from "rows"
                borderBottom: "solid 1px",
                borderColor: theme.palette.primary.azul,
                width: "100%",
                padding: '8px 10px 20px 10px',
            }}>
                <Box 
                    sx={{
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer"
                    }}
                    onClick={() => setSelectedOption("No gestionadas")}
                >
                    <Typography 
                        sx={{
                            fontFamily: 'Lato',
                            fontWeight: '700',
                            fontSize: '16px',
                            lineHeight: '20px',
                            color: selectedOption === "No gestionadas" ? theme.palette.primary.azul : "inherit"
                        }}
                    >
                        No gestionadas
                    </Typography>
                </Box>
                <Box 
                    sx={{
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer"
                    }}
                    onClick={() => setSelectedOption("Gestionadas")}
                >
                    <Typography 
                        sx={{
                            fontFamily: 'Lato',
                            fontWeight: '700',
                            fontSize: '16px',
                            lineHeight: '20px',
                            color: selectedOption === "Gestionadas" ? theme.palette.primary.azul : "inherit"
                        }}
                    >
                        Gestionadas
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography sx={{
                    fontFamily: 'Lato',
                    fontWeight: '500',
                    fontSize: '20px',
                    lineHeight: '25px',
                    paddingTop: '2vh',
                }}>
                    {selectedOption === "No gestionadas" ? "Tarjetas no gestionadas" : "Tarjetas gestionadas"}
                </Typography>
            </Box>
        </Box>
    );
}

export default SolicitudContacto;