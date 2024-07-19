// import { useState } from 'react';
// import jwt from 'jsonwebtoken';
// import jwtDecode from 'jwt-decode';

// const secretKey = 'your-256-bit-secret';

// const JWTTestComponent = () => {
//     const [token, setToken] = useState('');
//     const [decodedToken, setDecodedToken] = useState(null);

//     const generateToken = () => {
//         const payload = {
//             sub: '1234567890',
//             name: 'John Doe',
//             roles: ['admin'],
//             iat: Math.floor(Date.now() / 1000) - 30,
//         };

//         const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
//         setToken(token);
//     };

//     const decodeToken = () => {
//         if (token) {
//             const decoded = jwtDecode(token);
//             setDecodedToken(decoded);
//         }
//     };

//     return (
//         <div>
//             <button onClick={generateToken}>Generate Token</button>
//             {token && (
//                 <div>
//                     <h3>Token</h3>
//                     <pre>{token}</pre>
//                     <button onClick={decodeToken}>Decode Token</button>
//                 </div>
//             )}
//             {decodedToken && (
//                 <div>
//                     <h3>Decoded Token</h3>
//                     <pre>{JSON.stringify(decodedToken, null, 2)}</pre>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default JWTTestComponent;
