import { Box, Typography, Button, Menu, MenuItem } from "@mui/material";
import "./SolicitudContactoDetail.css"
import theme from "../../../../theme/theme";

function SolicitudContactoDetail({ title, date, status, name, surname, email, phone, text }) {

    const nombreCompleto = `${surname}, ${name}`
    const className = status === "unprocessed" ? "solicitudContactoDetail__orangeDot" : "solicitudContactoDetail__greenDot";
    const statusText = status === "unprocessed" ? "No gestionada" : "Gestionada"

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
                    Fecha de solicitud: {date}
                </Typography>
            </Box>
            <Box sx={{
                position: 'relative',
                width: '100%',
                marginTop: '2vh',
                marginBottom: '2vh'
            }}>
                <label for="field1" class="field__label">Apellido y Nombre</label>
                <input
                    id="field1"
                    type="text"
                    value={nombreCompleto}
                    readonly
                    class="field__input"
                />
            </Box>
            <Box sx={{
                position: 'relative',
                width: '100%',
                marginTop: '2vh',
                marginBottom: '2vh'
            }}>
                <label for="field2" class="field__label">Correo electrónico</label>
                <input
                    id="field2"
                    type="text"
                    value={email}
                    readonly
                    class="field__input"
                />
            </Box>
            <Box sx={{
                position: 'relative',
                width: '100%',
                marginTop: '2vh',
                marginBottom: '2vh'
            }}>
                <label for="field3" class="field__label">Teléfono</label>
                <input
                    id="field3"
                    type="text"
                    value={phone}
                    readonly
                    class="field__input"
                />
            </Box>
            <Box sx={{
                position: 'relative',
                width: '100%',
                marginTop: '2vh',
                marginBottom: '2vh'
            }}>
                <label for="field4" class="field__label">Mensaje</label>
                <textarea
                    id="field4"
                    type="text"
                    value={text}
                    readonly
                    class="field__textArea"
                />
            </Box>
        </Box>
    );
}

export default SolicitudContactoDetail;