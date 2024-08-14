import { Box, Typography, Grid } from "@mui/material";
import { ButtonLoad } from "../../../shared";
import jsonData from '../../../../assets/json/publicaciones.json';
import PublicacionesCard from "../../../cards/PublicacionesCard";
import { useState, useEffect } from "react";

const PublicacionesAdmin = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(jsonData);
    }, []);

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
        }}
        >
            <Box>
                <Typography
                    sx={{
                        fontFamily: 'Lato',
                        fontSize: '28px',
                        fontWeight: '500',
                        lineHeight: '35px',
                    }}
                >
                    Publicaciones
                </Typography>
            </Box>
            <ButtonLoad btnText="Crear Publicación" btnLink="/admin/publicaciones" />
            <Box sx={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', gap: '2vh'}}>
                <Typography
                    sx={{
                        fontFamily: 'Lato',
                        fontSize: '22px',
                        fontWeight: '600',
                        lineHeight: '25px',
                    }}
                >
                    Publicaciones cargadas
                </Typography>
                <Grid container spacing={2} sx={{ position: "relative", zIndex: 2 }}>
                    {data.map((publicacion, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <PublicacionesCard
                                title={publicacion.title}
                                images={publicacion.images}
                                date={publicacion.date}
                                text={publicacion.text}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default PublicacionesAdmin;
