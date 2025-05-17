import { Outlet, useMatches } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MainLayout = () => {
    const matches = useMatches();
    const currentRoute = matches[matches.length - 1];
    const title = currentRoute?.handle?.meta?.title || 'UIKIT';

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
