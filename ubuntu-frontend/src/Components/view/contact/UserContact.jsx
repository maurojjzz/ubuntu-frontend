import { useState } from 'react';
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Container } from "@mui/material";
import imageContact from "../../../assets/img/imagen contacto.jpg";
import SearchBar from "../../searchBar/SearchBar";
import './UserContact.css';
import ModalAlert from '../../shared/modalAlert/ModalAlert';


const UserContact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [alertType, setAlertType] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalSubTitle, setModalSubTitle] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone) => {
    return /^[0-9+\s]*$/.test(phone);
  };

  const allFieldsFilled = Object.values(formData).every(field => field.trim() !== '');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (allFieldsFilled) {
      if (isValidEmail(formData.email) && isValidPhone(formData.phone)) {
        setIsSubmitting(true);
        const isSuccess = true; // Simulación de éxito
  
        if (isSuccess) {
          setAlertType('success');
          setModalTitle('¡Mensaje enviado con éxito!');
          setModalSubTitle('Nos pondremos en contacto contigo pronto.');
        } else {
          setAlertType('error');
          setModalTitle('Error al enviar el mensaje');
          setModalSubTitle('Inténtalo de nuevo más tarde.');
        }
  
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
  
        setOpenModal(true);
        setTimeout(() => {
          setAlertType(null);
          setIsSubmitting(false);
          setOpenModal(false);
        }, 3000); // Duración del modal
  
      } else {
        setAlertType('error');
        setModalTitle('Error en la validación');
        setModalSubTitle('Por favor, verifica tu correo electrónico y número de teléfono.');
        setOpenModal(true);
      }
    } else {
      setAlertType('error');
      setModalTitle('Campos incompletos');
      setModalSubTitle('Por favor, completa todos los campos del formulario.');
      setOpenModal(true);
    }
  };
  

  return (
    <Container sx={{ padding: "0px" }}>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          color: "white",
          mb: 1,
          backgroundImage: `url(${imageContact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          pl: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            marginBottom: 6,
            marginTop: 3,
          }}
        >
          <SearchBar />
          <Typography
            sx={{
              fontFamily: "'Lato' ",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "24px",
              textAlign: "left",
              color: "white",
              marginTop: 4,
              marginBottom: 1,
            }}
          >
            CONTACTO
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Lato' ",
              fontWeight: "500",
              fontSize: "28px",
              lineHeight: "33px",
              textAlign: "left",
              marginTop: "2vh",
              color: "white",
              whiteSpace: "pre-wrap",
            }}
          >
            Contactanos para<br/>obtener<br />
            información<br />detallada sobre<br />cómo podés<br />
            invertir en un<br />futuro más<br />sostenible
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{
          textAlign: "center",
          marginBottom: 4,
          zIndex: 1,
          width: "100%"
        }}>
          <Typography
            sx={{
              fontFamily: "'Lato' ",
              fontWeight: "500",
              fontSize: "22px",
              lineHeight: "30px",
              textAlign: "center",
              color: "black",
              marginTop: "6vh",
              marginBottom: "32px",
            }}
          >
            Por favor, completá el formulario.
            Nos comunicaremos en breve.
          </Typography>
          <Typography sx={{
            fontFamily: "'Lato' ",
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "25px",
            textAlign: "center",
            color: theme.palette.primary.azul,
          }}>
            EcoSenda
          </Typography>
          <Typography sx={{
            fontFamily: "'Lato' ",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "25px",
            textAlign: "center",
            marginTop: "2vh",
          }}>
            Vas a contactar a Ubuntu para recibir más <br />
            información acerca del Microemprendimiento <br />
            seleccionado.
          </Typography>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2vh",
            marginBottom: "2vh",
          }}>
            <form onSubmit={handleSubmit} style={{
              marginTop: "2vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
              <div className="input-block">
                <input  
                    value={formData.name}
                    onChange={handleChange}  
                    type="text" name="name" id="input-text" required />
                <span className="placeholder">
                  Apellido y Nombre*
                </span>
              </div>
              <div className="input-block">
                <input
                  onChange={handleChange}  
                  value={formData.email}
                  type="email" name="email" id="email" required />
                <span className="placeholder">
                  Correo Electronico*
                </span>
              </div>
              <div className="input-block">
                <input
                  onChange={handleChange}  
                  value={formData.phone}
                  type="text" name="phone" id="phone" required />
                <span className="placeholder">
                  Telefono*
                </span>
                <p style={{
                    fontFamily: "'Lato' ",
                    fontSize: "15px",
                    fontWeight: "400",
                    lineHeight: "16px",
                    marginBottom: "20px",
                  }}>
                    Con el siguiente formato +54 9 261 002 002
                  </p>
              </div>
              <div className="input-block">
                <input
                  value={formData.message}
                  onChange={handleChange}
                  maxLength="300"
                  style={{
                    textAlign: 'left',
                  }}
                  type="text" name="message" id="input-text" required className="input-text" />
                <span className="placeholder">
                  Mensaje*
                </span>
                <div className="p" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '2px',
                }}>
                  <p style={{
                      fontFamily: "'Lato' ",
                      fontSize: "13px",
                      fontWeight: "400",
                      lineHeight: "16px",
                      marginLeft: '8px',
                    }}>
                      Máximo 300 caracteres.
                    </p>
                    <p style={{
                      fontFamily: "'Lato' ",
                      fontSize: "13px",
                      fontWeight: "400",
                      lineHeight: "16px",
                      margin: '0',
                      textAlign: 'right'
                    }}>
                      {formData.message.length}/300
                    </p>
                </div>
              </div>
              <button
                  type="submit"
                  style={{
                    width: "23rem",
                    height: "56px",
                    borderRadius: "100px",
                    backgroundColor: allFieldsFilled ? theme.palette.primary.azul : theme.palette.primary.grisOscuro,
                    color: theme.palette.primary.main,
                    border: "none",
                    fontFamily: "'Lato' ",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "25px",
                    marginTop: "2vh",
                    transition: "background-color 0.3s ease",
                  }}
                  disabled={!allFieldsFilled || isSubmitting}
                >
                  Enviar
                </button>
            </form>
            <ModalAlert
              status={alertType}
              title={modalTitle}
              subTitle={modalSubTitle}
              open={openModal}
              onClose={() => setOpenModal(false)}
              onSuccessAction={() => setOpenModal(false)}
              onTryAgain={() => setOpenModal(false)}
/>

          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default UserContact;
