import { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../../token/auth/AuthProvider';

function LoginSuccess() {
    const location = useLocation();
    const navigate = useNavigate();
    const { setToken } = useContext(AuthContext);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get('token');

        if (token) {
            setToken(token);
            navigate('/admin/microemprendimientos');
        }
    }, [location, setToken, navigate]);

    return null;
}

export default LoginSuccess;