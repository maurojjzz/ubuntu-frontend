import useContext from 'react';
import AuthContext from '../auth/authProvider'

const UseAuth = () => {
    return useContext(AuthContext);
};

export default UseAuth;