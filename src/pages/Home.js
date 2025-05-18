const Home = () => {
    return (
        <>
            <div className="container mt-5">
                <section className="hero-section text-center">
                    <h1 className="hero-title">UIKIT</h1>
                    <p className="hero-subtitle">A modern, flexible, and beautiful UI component library</p>
                </section>
                <section className="features-section">
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3 className="feature-title">Lightning Fast</h3>
                        <p>Optimized for performance and speed, UIKIT helps you build apps that load instantly.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎨</div>
                        <h3 className="feature-title">Modern Design</h3>
                        <p>Beautiful, responsive components with a focus on usability and aesthetics.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🛠️</div>
                        <h3 className="feature-title">Easy Integration</h3>
                        <p>Plug-and-play components that work seamlessly with your React projects.</p>
                    </div>
                </section>
                <div className="text-center mt-5 footer-text">
                    From PHICORP &copy; {new Date().getFullYear()}
                </div>
            </div>
        </>
    );
};

export default Home;
