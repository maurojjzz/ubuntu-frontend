import PropTypes from "prop-types";
import { Card, CardContent, Button, Box, Divider } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from "@mui/material/styles";
import "./SolicitudesCard.css";

const SolicitudesCard = ({ title, date, status, name, surname, email, phone, text, onButtonClick }) => {
    const theme = useTheme();
    const className = status === "unprocessed" ? "solicitudesCard__orangeDot" : "solicitudesCard__greenDot";

    return (
        <Card sx={{
            width: '94vw',
            margin: 'auto 1vw',
            paddingTop: '8px',
            paddingBottom: '8px',
            borderRadius: '16px',
            backgroundColor: theme.palette.primary.grisClaro,
            boxShadow: 'none',
            justifySelf: 'center',
            margin: '0 0 2vh 0'
        }}>
            <CardContent sx={{
                display: 'grid',
                gridTemplateColumns: '11fr 1fr',
                alignItems: 'center',
                padding: '8px 8px 8px 16px !important',
            }}>
                <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px' 
                }}>
                    <Box sx={{ 
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center' 
                    }}>
                        <Box className={className} />
                        <Box sx={{ 
                            fontFamily: 'Lato',
                            fontWeight: '600',
                            fontSize: '18px',
                            color: theme.palette.primary.azul
                        }}>
                            {title}
                        </Box>
                    </Box>
                    <Divider sx={{ 
                        borderColor: theme.palette.primary.azul,
                        width: '75%',
                        borderBottomWidth: '2px',
                        borderStyle: 'solid', 
                    }} />
                    <Box sx={{ 
                        fontFamily: 'Lato',
                        fontWeight: '400',
                        fontSize: '18px'
                    }}>
                        {date}
                    </Box>
                </Box>
                <Box>
                    <Button sx={{ 
                        color: theme.palette.primary.azul,
                        textTransform: 'none',
                        minWidth: '24px'
                    }}
                    onClick={() => onButtonClick({ title, date, status, name, surname, email, phone, text })}>
                        <ArrowForwardIosIcon />
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

SolicitudesCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    name: PropTypes.string,
    surname: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    text: PropTypes.string,
    onButtonClick: PropTypes.func.isRequired,
};

export default SolicitudesCard;