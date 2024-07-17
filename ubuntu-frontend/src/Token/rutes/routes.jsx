import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAuth } from '../auth/authProvider';
import ProtectedRoute from './ProtectedRoute';
import LandingPage from '../../components/view/landing/LandingPage';
import Login from '../../components/view/login/Login';
import ViewMicroEmprendimientos from '../../components/view/microEmprendimientos/ViewMicroEmprendimientos';
import ViewPublicaciones from '../../components/view/publicaciones/ViewPublicaciones';

const Routes = () => {
    const { token } = useAuth();

    const routesForPublic = [
        {
            path: "/home",
            element: <LandingPage />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/microemprendimientos",
            element: <ViewMicroEmprendimientos />,
        },
        {
            path: "/publicaciones",
            element: <ViewPublicaciones />,
        },
        // Faltaría la sección del formulario de contacto
        // {
        //     path: "/contacto",
        //     element: <Contacto />,
        // },
    ];

    const routesForAdmins = [
        {
            path: "/admin",
            element: <ProtectedRoute component={'componete o ruta de admin log'} roles={['ADMIN']} />,
            // Aquí irán las rutas de los admins
            // children: [
            // ],
        },
    ];

    const router = createBrowserRouter([
        ...routesForPublic,
        ...(token ? routesForAdmins : []),
    ]);

    return <RouterProvider router={router}/>;
};

export default Routes;
