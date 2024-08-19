import { Box, TextField, Button, Typography, Paper, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const EditQuestionForm = () => {
    const [questions, setQuestions] = useState([]);
    const [editableQuestions, setEditableQuestions] = useState([]);
    
    useEffect(() => {
        // Fetch all questions and answers
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/questions/all');
                setQuestions(response.data);
                setEditableQuestions(response.data);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };
        fetchQuestions();
    }, []);
    
    const handleInputChange = (index, field, value) => {
        const updatedQuestions = [...editableQuestions];
        updatedQuestions[index][field] = value;
        setEditableQuestions(updatedQuestions);
    };

    const handleSave = async (id, index) => {
        try {
            await axios.put(`http://localhost:8080/api/v1/questions//update/{id}`, editableQuestions[index]);
            alert("Pregunta actualizada con éxito!");
        } catch (error) {
            console.error("Error updating question:", error);
            alert("Hubo un error al actualizar la pregunta.");
        }
    };

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
        }}>
            <Typography 
                variant="h6" 
                sx={{ 
                    marginBottom: "1rem", 
                    fontFamily: 'Lato', 
                    fontWeight: "bold",
                    textAlign: "center",
                }}
            >
                Editar Preguntas y Respuestas
            </Typography>
            <Box component={Paper} sx={{ width: "100%", overflowX: "auto", padding: "1rem" }}>
                {editableQuestions.map((question, index) => (
                    <Box key={question.id} sx={{ marginBottom: "1.5rem", borderBottom: "1px solid #ddd", paddingBottom: "2rem" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Pregunta"
                                    value={question.questionText || ""}
                                    onChange={(e) => handleInputChange(index, 'questionText', e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Respuesta"
                                    value={question.answer || ""}
                                    onChange={(e) => handleInputChange(index, 'answer', e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Subpregunta"
                                    value={question.subQuestion || ""}
                                    onChange={(e) => handleInputChange(index, 'subQuestion', e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Subrespuesta"
                                    value={question.subAnswer || ""}
                                    onChange={(e) => handleInputChange(index, 'subAnswer', e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    onClick={() => handleSave(question.id, index)}
                                >
                                    Guardar
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default EditQuestionForm;
