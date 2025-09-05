import { Outlet, useLocation, matchPath } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { routes } from '../routes/routeConfig';
import { useEffect, useRef, useState } from 'react';
import Header from './Header';
import SideBar from './SideBar';

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
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const mainAppRef = useRef(null);
    useEffect(() => {
        mainAppRef.current.style.height = `${window.innerHeight - 2}px`;
        window.addEventListener('resize', () => {
            mainAppRef.current.style.height = `${window.innerHeight - 2}px`;
        });
    }, []);

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div id='mainApp' className='mainApp' ref={mainAppRef}>
                <div className='container containerApp'>
                    <div>
                        <SideBar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                    </div>
                    <div className='mainContent'>
                        <Header onOpenSidebar={() => setSidebarOpen(!sidebarOpen)} />
                        <div className='contentArea'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainLayout;
