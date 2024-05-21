import React from "react";
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
    <h3>BetChain: The Pinnacle of Decentralized Betting</h3>
    <p>Experience the Thrill of Innovation</p>
  </div>
  <div className="timeline">
    <div className="timeline-item">
      <div className="timeline-content">
        <h3>Step 1</h3>
        <h4>Provably Fair Gaming</h4>
        <p>Borrow against your assets with confidence, thanks to real-time price data feeds ensuring accurate valuations.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-content">
        <h3>Step 2</h3>
        <h4>Cross-Chain Functionality</h4>
        <p>Seamlessly transfer assets across blockchains for a fluid betting experience.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-content">
        <h3>Step 3</h3>
        <h4>AI-Driven Gaming</h4>
        <p>Engage with games that learn from your preferences, offering a personalized touch to your gaming journey.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-content">
        <h3>Step 4</h3>
        <h4>DeFi Lending</h4>
        <p>Borrow against your assets with confidence, thanks to real-time price data feeds ensuring accurate valuations.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-content">
        <h3>Step 5</h3>
        <h4>Community-Centric NFTs</h4>
        <p>Mint your unique NFT avatars and become part of an ever-growing BetChain family.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-content">
        <h3>Step 6</h3>
        <h4>Join the BetChain Community</h4>
        <p>Become a part of the future of online betting today. Sign up, mint your NFT, and start playing!</p>
      </div>
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
