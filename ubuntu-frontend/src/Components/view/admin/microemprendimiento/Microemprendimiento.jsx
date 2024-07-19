import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import MicrobusinessCard from "../../../microbusinessCard/MicrobusinessCard";
import { ServiceHttp } from "../../../../utils/services/serviceHttp";
import { ButtonLoad } from "../../../shared";

const Microemprendimiento = () => {
  const [microBusiness, setMicroBusiness] = useState([]);

  const microemprendimientos = new ServiceHttp("/microbusiness/");

  const getMicroEmprendimientos = async () => {
    try {
      const data = await microemprendimientos.get("search=");

      console.log(data);

      setMicroBusiness(data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(microBusiness);

  useEffect(() => {
    getMicroEmprendimientos();
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography 
        variant="h4"
        sx={{
          fontFamily: "Lato",
          fontWeight: "500",
          fontSize: "28px",
          lineHeight: "35px",
          mt: "40px",
          mb: "24px",
        }}  
        align="center"
      >
        Microemprendimientos
      </Typography>

      <ButtonLoad btnText="Cargar Microemprendimiento" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          pb: "41px",
        }}
      >
        {microBusiness.map((micro) => (
          <MicrobusinessCard 
            key={micro.id} 
            title={micro.name} 
            category={micro.categoryDescription} 
          />
        ))}
      </Box>
    </Box>
  );
};

export default Microemprendimiento;
