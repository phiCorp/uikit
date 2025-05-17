import { Outlet, useLocation, matchPath } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { routes } from '../routes/routeConfig';

function findTitleByLocation(location) {
    const rootRoute = routes[0];
    if (!rootRoute.children) return 'UIKIT';
    for (const child of rootRoute.children) {
        const path = child.path === '' ? '/' : `/${child.path}`;
        if (matchPath({ path, end: true }, location.pathname)) {
            return child.handle?.meta?.title || 'UIKIT';
        }
    }
    return 'UIKIT';
}

const MainLayout = () => {
    const location = useLocation();
    const title = findTitleByLocation(location);
    
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Outlet />
        </>
    );
};

export default MainLayout;
