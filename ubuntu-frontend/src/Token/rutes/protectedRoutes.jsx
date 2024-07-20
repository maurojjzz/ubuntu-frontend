import { Route, Navigate } from 'react-router-dom';
import { UseAuth } from '../auth/authProvider';

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
    const { user } = UseAuth();

    return (
        <Route
            {...rest}
            render={props => {
                if (!user) {
                  //si no esta autenticado se redirige al login
                    return <Navigate to="/login" />;
                }

                if (roles && !roles.includes(user.roles)) {
                    // Usuario autenticado pero sin permisos necesarios, redirigir a pagina de visitante
                    return <Navigate to="/home" />;
                }
               // Usuario autenticado y con permisos necesarios, renderizar el contenido de adminitrador
                return <Component {...props} />;
            }}
        />
    );
};

export default ProtectedRoute;









// import {RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { useAuth } from '../../Token/auth/authProvider';
// import { ProtectedRoute } from '../../Token/protectedRoutes/protected';
// import LandingPage from '../view/landing/LandingPage';
// import Login from '../view/login/Login';
// import ViewMicroEmprendimientos from '../view/microEmprendimientos/ViewMicroEmprendimientos';
// import ViewPublicaciones from '../view/publicaciones/ViewPublicaciones';

// const Routes = () => {
//     const { token } = useAuth();

//     const routesForPublic = [

//         {
//             path: "/home",
//             element: <LandingPage/>,
//           },
//           {
//             path: "/login",
//             element: <Login/>,
//           },
//           {
//             path: "/microemprendimientos",
//             element: <ViewMicroEmprendimientos/>,
//           },
//           {
//             path: "/publicaciones",
//             element: <ViewPublicaciones/>,
//           },
//         //   {
//         //     path: "/contacto",
//         //     element: <contacto/>,
//         //   }, faltaria seccion formulario contacto
//     ];


//     const routesForAdmins = [

//         {
//             path: "/",
//             element: <ProtectedRoute />, 
//             // children: [
//             // ] aquí iran las rutas de los admins
//         }
//     ]

//     const router = createBrowserRouter([
//         ...routesForPublic,
//         ...ProtectedRoute(!token ? routesForPublic : []),
//         ...routesForAdmins,
//     ]);

//     return <RouterProvider router={router}/>

// }

// export default Routes;