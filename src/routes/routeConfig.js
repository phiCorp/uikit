import { lazy } from 'react';
import MainLayout from '../layouts/MainLayout';


const Home = lazy(() => import('../pages/Home')); 

export const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <Home />,
                handle: {
                    meta: {
                        title: 'Welcome to UIKIT',
                    },
                },
            },
        ],
    },
];
