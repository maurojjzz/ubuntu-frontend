import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useTheme } from '@mui/material/styles';

const CreateQuestionsForm = () => {
    const theme = useTheme();
    
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [subQuestion, setSubQuestion] = useState("");
    const [subAnswer, setSubAnswer] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const questionResponse = await axios.post('http://localhost:8080/api/v1/questions/create', {
                question, 
                answer
            });
            
            const questionId = questionResponse.data.id; 
            
            if (subQuestion && subAnswer) {
                await axios.post(`http://localhost:8080/api/v1/questions/create/${questionId}/subquestion`, {
                    question: subQuestion, 
                    answer: subAnswer
                });
            }

            alert("Pregunta y respuestas creadas con éxito!");
            
            setQuestion("");
            setAnswer("");
            setSubQuestion("");
            setSubAnswer("");

        } catch (error) {
            console.error("Error al crear la pregunta y respuestas:", error);
            alert("Hubo un error al crear la pregunta y respuestas.");
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 12,
                padding: "2rem",
                bgcolor: "background.paper",
                borderRadius: "8px",
                boxShadow: 3,
            }}
        >
            <Typography 
                variant="h6" 
                sx={{ 
                    marginBottom: "1rem", 
                    fontFamily: 'Lato', 
                    fontWeight: "bold",
                    color: theme.palette.primary.azul,
                    textAlign: "center",
                }}
            >
                Crear Nueva Pregunta y Respuesta
            </Typography>
            <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                style={{ width: "100%", maxWidth: "400px" }}
            >
                <TextField
                    fullWidth
                    label="Pregunta"
                    variant="outlined"
                    margin="normal"
                    required
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Respuesta"
                    variant="outlined"
                    margin="normal"
                    required
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Subpregunta"
                    variant="outlined"
                    margin="normal"
                    value={subQuestion}
                    onChange={(e) => setSubQuestion(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Subrespuesta"
                    variant="outlined"
                    margin="normal"
                    value={subAnswer}
                    onChange={(e) => setSubAnswer(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ 
                        marginTop: "1rem", 
                        backgroundColor: theme.palette.primary.azul, 
                        color: theme.palette.primary.blanco,
                        "&:hover": {
                            backgroundColor: theme.palette.primary.verdeFuentes,
                        }
                    }}
                >
                    Crear Pregunta
                </Button>
            </form>
        </Box>
    );
};

export default CreateQuestionsForm;
