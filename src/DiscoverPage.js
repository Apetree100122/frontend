import React from 'react';
import './DiscoverPage.css';
import image1 from './assets/lc.png';
import image2 from './assets/lc.png';
import image3 from './assets/lc.png';

const DiscoverPage = () => {
  return (
    <div className="discover-page">
      <header className="header">
        <div className="logo-button">
          <button>Logo</button>
        </div>
        <div className="header-buttons">
          <button>Link</button>
          <button>Connect</button>
        </div>
      </header>
      <aside className="sidebar">
        <button>AI Art</button>
        <button>DeFi</button>
        <button>Home</button>
        <button>Settings</button>
        <button>Help</button>
      </aside>
      <main className="main-content1">
        <div className="header-content">
          <h1>Good Morning, Yo!</h1>
          <button className="balance-button">Balance: 7.9 ETH</button>
        </div>
        <div className="image-gallery">
          <img src={image1} alt="Image 1" />
          <img src={image2} alt="Image 2" />
          <img src={image3} alt="Image 3" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search games, Roulette.. Solitaire" />
        </div>
      </main>
    </div>
  );
}

export default DiscoverPage;