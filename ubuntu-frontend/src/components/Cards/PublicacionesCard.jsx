import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Button } from '@mui/material';


const PublicacionesCard = ({ title, images, date, text }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const paragraphs = text.split('\n\n');
    const firstParagraph = paragraphs[0];
    const remainingParagraphs = paragraphs.slice(1).join('\n\n');

    return (
        <Card sx={{ maxWidth: 345, margin: '16px auto' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {images}
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
    images: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default PublicacionesCard;