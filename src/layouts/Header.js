const Header = ({ onOpenSidebar }) => {
    return (
        <header className="headerApp">
            <button onClick={onOpenSidebar}>Open Sidebar</button>
        </header>
    );
};

export default Header;