function App() {
    return (
        <wrapper className="wrapper">
            <div className="main_header">
                <div className="container">
                    <nav className="nav">
                        <div className="left">
                            <a href="/">
                                <img
                                    src="icons/wakanda_logo.png"
                                    alt="wakanda logo"
                                />
                            </a>
                        </div>

                        <div className="right">
                            <ul className="nav_links">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/">About us</a>
                                </li>
                                <li>
                                    <a href="/">How it works</a>
                                </li>
                                <li>
                                    <a href="/">For Freelancer</a>
                                </li>
                            </ul>
                            <a href="/" className="button">
                                Get Started
                            </a>
                        </div>
                    </nav>

                    <header className="header">
                        <div className="recruit">
                            <h1>
                                Recruit top talented <br />
                                freelancer for your <br />
                                business
                            </h1>
                            <p>
                                Connect you to thoudsands of talented freelancer
                                from <br />
                                any industry. You can have the best people in
                                just few <br />
                                simple steps.
                            </p>
                            <div className="get_started">
                                <a href="/" className="button">
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="business_man">
                            <img
                                src="icons/header_man_image.png"
                                alt="header-man"
                            />
                        </div>
                    </header>
                    <div className="partners">
                        <img src="icons/Airbnb_Logo.svg" alt="Airbnb_Logo" />
                        <img src="icons/Google_Logo.svg" alt="Google_Logo" />
                        <img src="icons/Slack_Logo.svg" alt="Slack_Logo" />
                        <img src="icons/Netflix_Logo.svg" alt="Netflix_Logo" />
                        <img src="icons/Amazon_Logo.svg" alt="Amazon_Logo" />
                    </div>
                </div>
            </div>
            <main className="main">
                <section className="the_benefit">
                    <div className="container">
                        <div className="the_benefit_title">
                            <h5>FEATURE</h5>
                            <h2>
                                The benefit of using <br />
                                our platform
                            </h2>
                        </div>
                    </div>
                </section>
            </main>
        </wrapper>
    );
}

export default App;
