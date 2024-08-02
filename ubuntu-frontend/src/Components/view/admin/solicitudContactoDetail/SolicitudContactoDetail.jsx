import { Box, Typography, Button, Menu, MenuItem } from "@mui/material";
import "./SolicitudContactoDetail.css"
import theme from "../../../../theme/theme";

function SolicitudContactoDetail({ title, date, status, name, surname, email, phone, text }) {

    const nombreCompleto = `${surname}, ${name}`
    const className = status === "unprocessed" ? "solicitudContactoDetail__orangeDot" : "solicitudContactoDetail__greenDot";
    const statusText = status === "unprocessed" ? "No gestionada" : "Gestionada";
    const fechaText = status === "unprocessed" ? "Fecha de solicitud:" : "Fecha de gestión";

    return (
        <Box sx={{
            width: '94vw'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                marginBottom: '2vh'
            }}>
                <Box className={className}>
                </Box>
                <Box>
                    <Typography sx={{
                        fontFamily: 'Lato',
                        fontWeight: '700',
                        fontSize: '18px',
                        lineHeight: '24px'
                    }}>
                        {statusText}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
            }}>
                <Button sx={{ color: 'black' }}>
                    Estado
                    {/* 
                    TODO
                    <Menu>
                        <MenuItem> Gestionada</MenuItem>
                    </Menu> */}
                </Button>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography sx={{
                    fontFamily: 'Lato',
                    fontSize: '22px',
                    fontWeight: '700',
                    lineHeight: '24px',
                    color: theme.palette.primary.azul,
                    marginTop: '1vh',
                    marginBottom: '2vh'
                }}>
                    {title}
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography sx={{
                    fontFamily: 'Lato',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    marginBottom: '2vh',
                }}>
                    {fechaText} {date}
                </Typography>
            </Box>
            <Box sx={{
                position: 'relative',
                width: '100%',
                marginTop: '2vh',
                marginBottom: '2vh'
            }}>
                <label htmlFor="field1" className="field__label">Apellido y Nombre</label>
                <textarea
                    id="field1"
                    type="text"
                    value={nombreCompleto}
                    readOnly
                    className="field__input"
                />
            </Box>
            <Box sx={{
                position: 'relative',
                width: '100%',
                marginTop: '2vh',
                marginBottom: '2vh'
            }}>
                <label htmlFor="field2" className="field__label">Correo electrónico</label>
                <textarea
                    id="field2"
                    type="text"
                    value={email}
                    readOnly
                    className="field__input"
                />
            </Box>
            <Box sx={{
                position: 'relative',
                width: '100%',
                marginTop: '2vh',
                marginBottom: '2vh'
            }}>
                <label htmlFor="field3" className="field__label">Teléfono</label>
                <textarea
                    id="field3"
                    type="text"
                    value={phone}
                    readOnly
                    className="field__input"
                />
            </Box>
            <Box sx={{
                position: 'relative',
                width: '100%',
                marginTop: '2vh',
                marginBottom: '2vh'
            }}>
                <label htmlFor="field4" className="field__label">Mensaje</label>
                <textarea
                    id="field4"
                    value={text}
                    readOnly
                    className="field__textArea"
                />
            </Box>
        </Box>
    );
}

export default SolicitudContactoDetail;