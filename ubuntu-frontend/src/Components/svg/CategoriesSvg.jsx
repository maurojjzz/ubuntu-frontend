import {  Box } from "@mui/material";


const SvgStyle = () => {
    return (
    <Box sx={{
         position: "absolute",
         width:"100%",
         height:"10vh",
         top:0
    }}
    >
      <svg
        className="svg-microemprendimientos"
        viewBox="0 0 361 550"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
        style={{
          position: "relative",
          zIndex: 0,
          marginTop: 5,
        }}
      >
        <path d="M361 183C189.669 191.629 104.632 167.382 0 0V550H361V183Z" fill="#226516" />
      </svg>
      </Box>
    )
  }
  
  export default SvgStyle;
  