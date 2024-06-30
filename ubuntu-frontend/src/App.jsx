import { Typography, Container, Grid } from "@mui/material"; // Importa Grid para organizar las tarjetas
import data from "./../data.json"

import CustomCard from "./components/Cards/microEmpCard"

function App() {
  return (
    <>
      <Container>
        <Typography variant="h1" color="primary-grisOscuro">
          Ubuntu
        </Typography>
        <Grid container spacing={3}>
          {data.map((cardData, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CustomCard
                images={cardData.images}
                title={cardData.title}
                subtitle={cardData.subtitle}
                category={cardData.category}
                location={cardData.location}
                details={cardData.descriptions} 
                moreInf={cardData.moreInformation}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
