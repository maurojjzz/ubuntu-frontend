import { Box } from "@mui/material";
import { useState } from "react";

const ShowMyGoogleUserName = () => {
    const [showLogoutButton, setShowLogoutButton] = useState(false);

    const handlePersonButtonClick = () => {
        setShowLogoutButton(!showLogoutButton);
    };

    return (
        <Box className="nav__User">
            <div className="show-datauser" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <button 
                    className="button-person" 
                    style={{ 
                        backgroundColor: "black", 
                        border: "none", 
                        color: "white", 
                        padding: "4px", 
                        cursor: "pointer", 
                        width: "40px", 
                        height: "40px", 
                        borderRadius: "100px", 
                        margin: "2px" 
                    }}
                    onClick={handlePersonButtonClick}
                >
                    AD
                </button>
                {showLogoutButton && (
                    <div 
                        style={{ 
                            backgroundColor: "#D2D2D2", 
                            textAlign: "center", 
                            display: "flex", 
                            justifyContent: "center", 
                            borderRadius: "5px", 
                            marginTop: "5px", 
                            position:"fixed",
                            top:"57px",
                            padding:"10px",
                            right:"20px",
                            zIndex:"30",
                            gap:"10px"
                        }} 
                        className="cerrar-sesion"
                    >
                        <button 
                            style={{ 
                                border: "none", 
                                backgroundColor: "transparent", 
                                color: "#090909",
                                width:"100px",
                                height:"40px",
                            }} 
                            className="cerrarS-button"
                        >
                            cerrar sesión
                        </button>
                    </div>
                )}
            </div>
        </Box>
    );
}

export default ShowMyGoogleUserName;
