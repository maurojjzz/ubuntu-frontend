import { createContext, useMemo, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken_] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);

    const setToken = (newToken) => {
        setToken_(newToken);
        if (newToken) {
            const decodedToken = jwtDecode(newToken);
            setUser({
                username: decodedToken.sub,
                roles: decodedToken.roles,
            });
        } else {
            setUser(null);
        }
    };

    const logout = () => {
        setToken(null);
    };

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            localStorage.setItem('token', token);
        } else {
            delete axios.defaults.headers.common['Authorization'];
            localStorage.removeItem('token');
        }
    }, [token]);

    const contextValue = useMemo(
        () => ({
            token,
            user,
            setToken,
            logout,
        }),
        [token, user]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
