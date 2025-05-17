import { lazy } from 'react';
import MainLayout from '../layouts/MainLayout';

const Home = lazy(() => import('../pages/Home'));
// const NotFoundPage = lazy(() => import('../pages/notFoundPage'));

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
                        title: 'Home',
                        requiresAuth: false,
                    },
                },
            },
        ],
    },
];
