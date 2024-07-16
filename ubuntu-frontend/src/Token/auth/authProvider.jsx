import axios from 'axios';
import { 
    Children,
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState 
} from 'react';


const AuthContext = createContext();

const AuthProvider = ( { Children } ) => {
    const [token, setToken_] = useState(localStorage.getItem('token'));

    const setToken = (newToken) => {
        setToken_(newToken);
    };

    useEffect(()=> {
        if (token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer' + token;
            localStorage.setItem('token', token);
        }else {
            delete axios.defaults.headers.common['Authorization'];
            localStorage.removeItem('token');
        }
    }, [token]);

    const contextValue = useMemo(
        ()=> ({
            token,
            setToken,
        }),
        [token]
    );

    return (
        <AuthContext.Provider value={contextValue}>{Children}</AuthContext.Provider>
    );
};


export const useAuth = () => {
    return useContext(AuthContext);
 };
  
 export default AuthProvider;
