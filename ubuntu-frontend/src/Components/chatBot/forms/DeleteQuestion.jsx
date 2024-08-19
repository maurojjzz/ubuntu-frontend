import { Box, Button, Typography, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import theme from "../../../theme/theme";

const DeleteQuestionForm = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedQuestionId, setSelectedQuestionId] = useState('');

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/questions/all');
                setQuestions(response.data);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };
        fetchQuestions();
    }, []);

    const handleDelete = async () => {
        if (!selectedQuestionId) {
            alert("Por favor, seleccione una pregunta.");
            return;
        }
        try {
            await axios.delete(`http://localhost:8080/api/v1/questions/delete/${selectedQuestionId}`);
            alert("Pregunta eliminada con éxito!");
            setSelectedQuestionId(''); 
        } catch (error) {
            console.error("Error deleting question:", error);
            alert("Hubo un error al eliminar la pregunta.");
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
                Borrar Pregunta
            </Typography>
            <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
                <InputLabel>Pregunta</InputLabel>
                <Select
                    value={selectedQuestionId}
                    onChange={(e) => setSelectedQuestionId(e.target.value)}
                    label="Pregunta"
                >
                    {questions.map((question) => (
                        <MenuItem key={question.id} value={question.id}>
                            {question.questionText}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button
                variant="contained"
                onClick={handleDelete}
                sx={{
                    backgroundColor: theme.palette.primary.azul,
                    color: "#FFFFFF",
                    "&:hover": {
                        backgroundColor: "#0056b3",
                    },
                }}
            >
                Eliminar
            </Button>
        </Box>
    );
};

export default DeleteQuestionForm;
