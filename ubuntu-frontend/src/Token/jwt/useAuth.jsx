import { useContext } from 'react';
import  AuthContext  from '../../token/auth/authProvider';

const UseAuth = () => {
    return useContext(AuthContext);
};

export default UseAuth;
