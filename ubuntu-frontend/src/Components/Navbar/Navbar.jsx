import "./Navbar.css";
import { Box } from '@mui/material';
import DrawerComponent from "../drawerComponent/DrawerComponent";

function Navbar() {
    return (
        <Box sx={{ height: '7vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }} className='navBar__container'>
            <DrawerComponent />
            <img src='../../src/assets/img/logoubuntu.png' alt="Ubuntu Logo" className='navBar__logo'/>
            <div style={{ width: '40px' }}></div> {/* Espaciador para mantener el logo centrado */}
        </Box>
    );
}

export default Navbar;