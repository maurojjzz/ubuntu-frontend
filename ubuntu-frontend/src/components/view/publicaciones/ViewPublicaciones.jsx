import React from 'react';
import PublicacionesCard from '../../Cards/PublicacionesCard';
import data from "../../../../publicaciones.json";
import { Box } from '@mui/material';

const ViewPublicaciones = () => {
    return (
        <Box>
            {data.map((publicacion, index) => (
                <PublicacionesCard
                    key={index}
                    title={publicacion.title}
                    images={publicacion.images}
                    date={publicacion.date}
                    text={publicacion.text}
                />
            ))}
        </Box>
    );
};

export default ViewPublicaciones;