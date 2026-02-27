import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/characters', element: <Characters /> },
            { path: '/episodes', element: <Episodes /> },
            { path: '/locations', element: <Locations /> },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
