import { Box } from "@mui/material";
import ChatBot from "react-chatbotify";
import { Button } from "react-chatbotify";
import robotIcon from "../../assets/img/icon-robot.png";


const options = [
  "Horarios de Atención",
  "Ubicación",
  "Contáctanos"
];

const flow = {
  start: {
    message: "¡Hola! Soy Tan Jin 👋. Bienvenido a React ChatBotify. Estoy emocionado de que estés usando nuestro chatbot 😊!",
    transition: { duration: 1500 },
    path: "show_options"
  },
  show_options: {
    message: "Parece que aún no has configurado un flujo de conversación. ¡No te preocupes! Aquí tienes algunas cosas útiles que puedes consultar para comenzar:",
    options: options,
    path: "handle_selection"
  },
  handle_selection: {
    transition: { duration: 0 },
    path: async (params) => {
      let responseMessage = "";
      switch (params.userInput) {
        case "Horarios de Atención":
          responseMessage = "Estamos disponibles de lunes a viernes de 9:00 a 18:00.";
          break;
        case "Ubicación":
          responseMessage = "Nuestra oficina se encuentra en la Calle Falsa 123, Ciudad.";
          break;
        case "Contáctanos":
          responseMessage = "Puedes contactarnos a través del correo contacto@empresa.com.";
          break;
        default:
          responseMessage = "No entiendo esa opciones. Por favor elige una opción de la lista.";
          return "show_options";
      }
      await params.injectMessage(responseMessage);
      return "repeat";
    }
  },
  repeat: {
    transition: { duration: 3000 },
    path: "show_options"
  }
};

const settings = {
  general: {
    primaryColor: "#2E8B57",
    secondaryColor: "#4682B4",
    fontFamily: "Lato",
    showFooter: false,
    showInputRow: false,
  },
  audio: {
    disabled: true,
  },
  chatHistory: {
    disabled: true,
    storageKey: "conversations_summary",
  },
  tooltip: {
    mode: "NEVER",
  },
  header: {
    title: "UbuntuBOT",
    buttons: [Button.CLOSE_CHAT_BUTTON],
    showAvatar: false,
  },
  notification: {
    disabled: true,
  },
};

const styles = {
  chatWindowStyle: {
    position: "fixed",
    right: "10px",
    maxWidth: "360px",
    minWidth: "280px",
    width: "90%",
  },
  chatButtonStyle: {
    background: `url(${robotIcon}), linear-gradient(135deg, #2E8B57 0%, #20B2AA 50%, #4682B4 100%)`,
    backgroundImage: `url(${robotIcon})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}

const ChatBotLayout = () => {
  return (
    <Box>
      <ChatBot flow={flow} settings={settings} styles={styles}/>
    </Box>
  );
};

export default ChatBotLayout;
