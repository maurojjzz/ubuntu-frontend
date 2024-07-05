import { useState, useEffect } from 'react';
import { Box, Typography, useTheme, Grid } from '@mui/material';
import PublicacionesCard from '../../cards/PublicacionesCard';
import SearchBar from '../../searchBar/SearchBar';
import NavBar from '../../navbar/Navbar';
import imagenPublicaciones from '../../../assets/img/imagen publicaciones.jpg';
import './ViewPublicaciones.css';
import jsonData from '../../../assets/json/publicaciones.json';
import SvgPublic from '../../svg/PublicSvg';

const ViewPublicaciones = () => {
    // eslint-disable-next-line no-unused-vars
    const theme = useTheme();
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(jsonData);
    }, []);

    return (
        <>
            <NavBar />
            <Box sx={{
                position: 'relative',
                width: '100%',
                height: '60vh',
            }}>
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${imagenPublicaciones})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 1,
                }} />
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(9, 9, 9, 0.8)',
                    zIndex: 2,
                }} />
                <Box sx={{
                    position: 'relative',
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingTop: '3vh',
                    paddingLeft: '2vh',
                    paddingRight: '2vh',
                }}>
                    <SearchBar />
                    <Box className='publicaciones__container__title'>
                        <Typography sx={{ fontFamily: 'Lato', fontSize: '14px', lineHeight: '24px' }}>PUBLICACIONES</Typography>
                    </Box>
                    <Box className='publicaciones__container__subTitle'>
                        <Typography sx={{ fontFamily: 'Lato', fontSize: '24px', lineHeight: '32px' }}>Explorando finanzas de impacto</Typography>
                    </Box>
                    <Box className='publicaciones__container__texto'>
                        <Typography sx={{ fontFamily: 'Lato', fontSize: '20px', lineHeight: '32px' }}>Conocé cómo decisiones financieras pueden impactar positivamente en la sociedad y el medio ambiente</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ position: "relative", zIndex: 10, marginTop: 5 }}>
                <SvgPublic />
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
        </>
    );
};

export default ViewPublicaciones;