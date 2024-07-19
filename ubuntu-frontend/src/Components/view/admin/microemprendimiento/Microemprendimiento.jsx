import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import MicrobusinessCard from "../../../microbusinessCard/MicrobusinessCard";
import { ServiceHttp } from "../../../../utils/services/serviceHttp";

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
    <Box>
      <Typography variant="h4">Microemprendimientos</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid red",
          alignItems: "center",
          gap: "16px",
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
