import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Button } from '@mui/material';
import ImageCarousel from '../shared/ImageCarousel';
import { useTheme } from '@mui/material/styles';

const PublicacionesCard = ({ title, images, date, text }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const theme = useTheme();

    const paragraphs = text.split('\n\n');
    const firstParagraph = paragraphs[0];
    const remainingParagraphs = paragraphs.slice(1).join('\n\n');

    return (
        <Card sx={{
            maxWidth: 328,
            margin: '16px auto',
            paddingTop: '16px', 
            paddingBottom:'8px',
            borderRadius: '16px',
            backgroundColor: theme.palette.primary.grisClaro,
            }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <ImageCarousel images={images} />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {date}
                </Typography>
                <Typography variant="body1" component="p">
                    {firstParagraph}
                </Typography>
                {expanded && (
                    <Typography variant="body1" component="p">
                        {remainingParagraphs}
                    </Typography>
                )}
                <Button sx={{color: 'black'}} onClick={handleExpandClick}>
                    {expanded ? 'Mostrar menos' : 'Leer más'}
                </Button>
            </CardContent>
        </Card>
    );
};

PublicacionesCard.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default PublicacionesCard;