import { Box, Typography } from "@mui/material";
import theme from "../../../../theme/theme";
import { useState, useEffect } from "react";
import SolicitudesCard from "../../../cards/SolicitudesCard";
import jsonData from '../../../../assets/json/solicitudes.json';
import SolicitudContactoDetail from "../solicitudContactoDetail/SolicitudContactoDetail";

function SolicitudContacto() {
    const [selectedOption, setSelectedOption] = useState("No gestionadas");
    const [selectedData, setSelectedData] = useState(null);

    useEffect(() => {
        setSelectedData(null);
    }, []);

    const filteredData = jsonData.filter(item => {
        if (selectedOption === "No gestionadas") {
            return item.status === "unprocessed";
        } else {
            return item.status === "processed";
        }
    });

    const handleButtonClick = (data) => {
        setSelectedData(data);
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setSelectedData(null);
    };

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
                flexDirection: "row",
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
                    onClick={() => handleOptionChange("No gestionadas")}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Lato',
                            fontWeight: '700',
                            fontSize: '16px',
                            lineHeight: '20px',
                            color: selectedOption === "No gestionadas" ? theme.palette.primary.azul : theme.palette.primary.grisOscuro,
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: '-20px',
                                height: '3px',
                                backgroundColor: theme.palette.primary.azul,
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                borderBottomLeftRadius: '0px',
                                borderBottomRightRadius: '0px',
                                visibility: selectedOption === "No gestionadas" ? 'visible' : 'hidden'
                            }
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
                    onClick={() => handleOptionChange("Gestionadas")}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Lato',
                            fontWeight: '700',
                            fontSize: '16px',
                            lineHeight: '20px',
                            color: selectedOption === "Gestionadas" ? theme.palette.primary.azul : theme.palette.primary.grisOscuro,
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: '-20px',
                                height: '3px',
                                backgroundColor: theme.palette.primary.azul,
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                borderBottomLeftRadius: '0px',
                                borderBottomRightRadius: '0px',
                                visibility: selectedOption === "No gestionadas" ? 'hidden' : 'visible'
                            }
                        }}
                    >
                        Gestionadas
                    </Typography>
                </Box>
            </Box>
            <Box>
                {selectedData ? (
                    <SolicitudContactoDetail {...selectedData} />
                ) : (
                    filteredData.map((item, index) => (
                        <SolicitudesCard
                            key={index}
                            title={item.title}
                            date={item.date}
                            status={item.status}
                            name={item.name}
                            surname={item.surname}
                            email={item.email}
                            phone={item.phone}
                            text={item.text}
                            onButtonClick={() => handleButtonClick(item)}
                        />
                    ))
                )}
            </Box>
        </Box>
    );
}

export default SolicitudContacto;