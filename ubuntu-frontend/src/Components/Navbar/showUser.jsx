import { Box } from "@mui/material"


const ShowMyGoogleUserName = () => {
    return (
        <Box 
        sx={{ position: "relative" }}
        className="nav__User">
            <div className="show-datauser" style={{ backgroundColor: 'black', padding: "8px", borderRadius: 100, color: "white"}}>
                AD
            </div>
        </Box>
    )
}

export default ShowMyGoogleUserName;