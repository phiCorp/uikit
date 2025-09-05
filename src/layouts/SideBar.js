
const SideBar = ({ open, onClose }) => {
    return (
        <>
            <div
                className={`sidebar-overlay${open ? ' active' : ''}`}
                onClick={onClose}
                style={{ display: open ? 'block' : 'none' }}
            />
            <aside className={`sideBarApp${open ? ' open' : ''}`}>
                <button onClick={onClose}>Close SideBar</button>
            </aside>
        </>
    );
};

export default SideBar;
