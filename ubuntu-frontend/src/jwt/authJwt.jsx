import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const useAuth = () => {
    const location = useLocation();

    useEffect(()=>{
        const params = new URLSearchParams(location.search);
        const token = params.get('token');

        if (token) {
            localStorage.setItem('jwt', token);
            // Navigate('/vistaAdministrador')
        }
    },[location])
}

export default useAuth;