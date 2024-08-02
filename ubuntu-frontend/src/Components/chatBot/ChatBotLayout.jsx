import { Box } from '@mui/material'

const ChatBotLayout = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "80%",
        right: "10%",
        border: "1px solid red",
        width: "60px",
        height: "60px",
        backgroundColor: "white",
        zIndex: 10,
      }}
    >
      Chat Bot
    </Box>
  )
}

export default ChatBotLayout
