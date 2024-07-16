import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAuth } from '../../Token/auth/authProvider';
import { ProtectedRoute } from '../../Token/protectedRoutes/protected';
import LandingPage from '../view/landing/LandingPage';
import Login from '../view/login/Login';
import ViewMicroEmprendimientos from '../view/microEmprendimientos/ViewMicroEmprendimientos';
import ViewPublicaciones from '../view/publicaciones/ViewPublicaciones';

const Routes = () => {
    const { token } = useAuth();

    const routesForPublic = [

        {
            path: "/home",
            element: <LandingPage/>,
          },
          {
            path: "/login",
            element: <Login/>,
          },
          {
            path: "/microemprendimientos",
            element: <ViewMicroEmprendimientos/>,
          },
          {
            path: "/publicaciones",
            element: <ViewPublicaciones/>,
          },
        //   {
        //     path: "/contacto",
        //     element: <contacto/>,
        //   }, faltaria seccion formulario contacto
    ];


    const routesForAdmins = [

        {
            path: "/",
            element: <ProtectedRoute />, 
            // children: [
            // ] aquí iran las rutas de los admins
        }
    ]

    const router = createBrowserRouter([
        ...routesForPublic,
        ...ProtectedRoute(!token ? routesForPublic : []),
        ...routesForAdmins,
    ]);

    return <RouterProvider router={router}/>

}

export default Routes;