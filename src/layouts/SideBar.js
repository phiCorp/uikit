
const SideBar = ({ open, onClose }) => {
    return (
        <>
            {/* Overlay for mobile */}
            <div
                className={`sidebar-overlay${open ? ' active' : ''}`}
                onClick={onClose}
                style={{ display: open ? 'block' : 'none' }}
            />
            <aside className={`sideBarApp${open ? ' open' : ''}`}>
                {/* Sidebar content here */}
            </aside>
        </>
    );
};

export default SideBar;
