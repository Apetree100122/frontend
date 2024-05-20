// HomePage.js
import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import controlVImage from "./assets/download.png";
import templeImage from "./assets/lc.png";
import image1 from "./assets/defi.png";
import image2 from "./assets/slot.png";
import image3 from "./assets/ai.png";
import GridPage from "./GridPage";


const HomePage = () => {
    return (
        <div className="App">
            {/* Header */}
            <header className="header">
                {/* Logo */}
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                </div>
                {/* Navigation */}
                <nav className="navigation">
                    <ul>
                        <li><Link to="/discover">Discover</Link></li>
                        <li><Link to="/ai">AI Generation</Link></li>
                        <li><Link to="/how-it-works">How it Works</Link></li>
                    </ul>
                </nav>
                {/* Get Started Button */}
                <div className="get-started">
                    <button>Get Started</button>
                </div>
            </header>
            {/* Main Content */}
            <div className="main-content">
                {/* Text Container */}
                <div className="text-container">
                    <h1>Super NFT Marketplace</h1>
                </div>
                {/* Image Container */}
                <div className="image-container">
                    <img src={controlVImage} alt="Control V"/>
                </div>
            </div>
            {/* Reversed Content */}
            <div className="reversed-content">
                {/* Image Container */}
                <div className="image-container">
                    <img src={templeImage} alt="Temple"/>
                </div>
                {/* Text Container */}
                <div className="text-container">
                    <h2>Why choose us?</h2>
                    <p>BetChain is not just a platform; it’s a new era in online betting.
                        Combining artificial intelligence with blockchain’s security,
                        we offer a betting experience that’s both thrilling and trustworthy.
                    </p>
                </div>
            </div>
            {/* New Section with Text on Top and Images Below */}
            <div className="top-text-images-below">
                {/* Text Container */}
                <div className="text-container">
                    <h2>Our Tracks</h2>
                    <p>
                        BetChain is not just a platform; it’s a new era in online betting.
                        Combining artificial intelligence with blockchain’s security
                    </p>
                </div>
                {/* Images Container */}
                <div className="images-container">
                    <div className={"custom-card"}>
                        <img className={"test-img"} src={image1} alt="Image 1"/>
                    </div>
                    <div className={"custom-card"}>
                        <img src={image2} alt="Image 2"/>
                    </div>
                    <div className={"custom-card"}>
                        <img src={image3} alt="Image 3"/>
                    </div>
                </div>
            </div>
            {/* New Section with Text on Top and a Timeline Below */}
            <div className="timeline-section">
                <div className="text-container">
                    <h1>Timeline Section Heading</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna nec tortor tristique
                        posuere.</p>
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-date">January</div>
                        <div className="timeline-content">Content for January</div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-date">February</div>
                        <div className="timeline-content">Content for February</div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-date">March</div>
                        <div className="timeline-content">Content for March</div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-date">April</div>
                        <div className="timeline-content">Content for April</div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-date">May</div>
                        <div className="timeline-content">Content for May</div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-date">June</div>
                        <div className="timeline-content">Content for June</div>
                    </div>
                </div>
            </div>
            <GridPage/>
            {/* Footer */}
            <footer className="footer">
                <div className="footer-column">
                    <img src={logo} alt="Home"/>
                    <p>Home</p>
                </div>
                <div className="footer-column">
                    <p>Site Map</p>
                    {/* Add any additional content for Site Map */}
                </div>
                <div className="footer-column">
                    <p>Company</p>
                    {/* Add any additional content for Company */}
                </div>
                <div className="footer-column">
                    <p>Resources</p>
                    {/* Add any additional content for Resources */}
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
