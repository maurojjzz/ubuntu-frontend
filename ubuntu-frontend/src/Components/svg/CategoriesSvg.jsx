import {  Box } from "@mui/material";


const SvgStyle = () => {
    return (
    <Box sx={{
         position: "absolute",
         width:"100%",
        //  height:"10vh",
         height:"10vh",

         top:0
    }}
    >
      <svg
        className="svg-microemprendimientos"
        viewBox="0 0 361 430"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
        style={{
          position: "relative",
          zIndex: 0,
          marginTop: 0,
        }}
      >
        <path d="M461 0183C389.669 191.629 104.632 167.382 0 0V550H361V183Z" fill="#226516" />
      </svg>
      </Box>
    )
  }
  
  export default SvgStyle;
  
// import { Box } from "@mui/material";

// const SvgStyle = ({ height = "15vh" }) => {
//   return (
//     <Box
//       sx={{
//         position: "absolute",
//         width: "100%",
//         height: "15vh",
//         bottom: 0,
//       }}
//     >
//       <svg
//         className="svg-microemprendimientos"
//         viewBox="0 0 361 183" // Ajusta el viewBox según sea necesario
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         preserveAspectRatio="xMinYMin meet"
//         style={{
//           position: "relative",
//           zIndex: 0,
//           marginTop: 5,
//         }}
//       >
//         <path d="M361 183C189.669 191.629 104.632 167.382 0 0V183H361V183Z" fill="#226516" />
//       </svg>
//     </Box>
//   );
// };

// export default SvgStyle;
