import React, {useEffect} from "react";
import logo from "./logo.svg";
import controlVImage from "./assets/download.png";
import templeImage from "./assets/lc.png";
import image1 from "./assets/lc.png";
import image2 from "./assets/lc.png";
import image3 from "./assets/lc.png";
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
                        <li><a href="#discover">Discover</a></li>
                        <li><a href="#marketplace">Marketplace</a></li>
                        <li><a href="#how-it-works">How it Works</a></li>
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
                    <h1>Lorem Ipsum Heading</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna nec tortor tristique
                        posuere.</p>
                </div>
            </div>
            {/* New Section with Text on Top and Images Below */}
            <div className="top-text-images-below">
                {/* Text Container */}
                <div className="text-container">
                    <h1>Another Section Heading</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna nec tortor tristique
                        posuere.</p>
                </div>
                {/* Images Container */}
                <div className="images-container">
                    <img src={image1} alt="Image 1"/>
                    <img src={image2} alt="Image 2"/>
                    <img src={image3} alt="Image 3"/>
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