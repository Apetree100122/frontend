import React from 'react';
import './DiscoverPage.css';
import image1 from './assets/joker.jpg';
import image2 from './assets/roulette-logo.jpg';
import image3 from './assets/wild-west.jpg';
import Sidebar from './Sidebar';

const games = [
  { image: image1, name: 'Joker', price: '0.5 ETH' },
  { image: image2, name: 'Roulette', price: '1.0 ETH' },
  { image: image3, name: 'Wild West', price: '0.8 ETH' },
];

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
      <Sidebar />
      <main className="main-content4">
        <div className="header-content">
          <h1>Good Morning, Yo!</h1>
          <button className="balance-button">Balance: 7.9 ETH</button>
        </div>
        <div className="image-gallery">
          {games.map((game, index) => (
            <div className="image-container" key={index}>
              <img src={game.image} alt={`Image ${index + 1}`} />
              <div className="image-info">
                <span className="game-name">{game.name}</span>
                <span className="game-price">{game.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search games, Roulette.. Solitaire" />
        </div>
      </main>
    </div>
  );
}

export default DiscoverPage;
