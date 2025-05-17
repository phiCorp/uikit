import { useRoutes } from 'react-router-dom';
import { routes } from './routeConfig';
import { Suspense } from 'react';
import FullPageLoader from '../components/loaders/FullPageLoader';

const AppRoutes = () => {
    const element = useRoutes(routes);
    return <Suspense fallback={<FullPageLoader />}>{element}</Suspense>;
};

export default AppRoutes;
