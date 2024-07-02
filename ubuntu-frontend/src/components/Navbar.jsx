import React from 'react'
import "./Navbar.css";
import { Box } from '@mui/material';

function Navbar() {
    return (
        <>
            <Box sx={{height: '7vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='navBar__container'>
                <img src='../../src/assets/img/logoubuntu.png' alt="Ubuntu Logo" className='navBar__logo'/>
            </Box>
        </>
    )
}

export default Navbar;