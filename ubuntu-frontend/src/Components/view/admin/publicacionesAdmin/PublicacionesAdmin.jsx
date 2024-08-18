import { Box, Typography, Grid } from "@mui/material";
import { ButtonLoad } from "../../../shared";
import jsonData from '../../../../assets/json/publicaciones.json';
import PublicacionesAdminCard from "./PublicacionesAdminCard";
import { useState, useEffect } from "react";
import EditarPublicacion from "./EditarPublicacion";

const PublicacionesAdmin = () => {
    const [data, setData] = useState([]);
    const [focusedCardId, setFocusedCardId] = useState(null);
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        setData(jsonData);
    }, []);

    const handleEdit = (id) => {
        setEditingId(id); 
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
        }}>
            {editingId === null ? (
                <>
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
                    <ButtonLoad btnText="Crear Publicación" btnLink="/admin/crearpublicacion" />
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
                                    <PublicacionesAdminCard
                                        cardId={index}
                                        title={publicacion.title}
                                        images={publicacion.images}
                                        date={publicacion.date}
                                        text={publicacion.text}
                                        focusedCardId={focusedCardId}
                                        setFocusedCardId={setFocusedCardId}
                                        onEdit={handleEdit} 
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </>
            ) : (
                <EditarPublicacion publicacion={data[editingId]} /> 
            )}
        </Box>
    );
};

export default PublicacionesAdmin;