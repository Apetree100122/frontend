import React from 'react';
import './DiscoverPage.css';
import image1 from '../assets/joker.jpg';
import image2 from '../assets/roulette-logo.jpg';
import image3 from '../assets/wild-west.jpg';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

// We can add more games to the list if necessary
const games = [
  { image: image1, name: 'Joker', price: '0.5 ETH' },
  { image: image2, name: 'Roulette', price: '1.0 ETH' },
  { image: image3, name: 'Wild West', price: '0.8 ETH' },
];

// not sure what the categories are for but its easy to remove if we don't need.
const categories = [
  { name: 'Trending', icon: '❤️' },
  { name: 'All', icon: '📊' },
  { name: 'Pop', icon: '🎤' },
  { name: 'Hip Pop', icon: '🎧' },
  { name: 'Afro', icon: '🌍' },
  { name: 'Amapiano', icon: '🎹' },
  { name: 'Gospel', icon: '⛪️' },
  { name: 'R & B', icon: '🎼' },
  { name: 'Country Side', icon: '🌾' },
  { name: 'Punk', icon: '🎸' }
];

const DiscoverPage = () => {
  return (
      <div className="discover-page">
        <Header/>
        <Sidebar/>
        <main className="main-content4">
          <div className="header-content">
            <h1>Good Morning, Yo!</h1>
            <button className="balance-button">Balance: 7.9 ETH</button>
          </div>

          <div className="image-gallery">
            {games.map((game, index) => (
                <div className="image-container1" key={index}>
                  <img src={game.image} alt={`Image ${index + 1}`}/>
                  <div className="image-info">
                    <span className="game-name">{game.name}</span>
                    <span className="game-price">{game.price}</span>
                  </div>
                </div>
            ))}
          </div>
          <div className="category-nav">
            {categories.map((category, index) => (
                <div className="category-item" key={index}>
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                </div>
            ))}
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search games, Roulette.. Solitaire"/>
          </div>
        </main>
      </div>
  );
}

export default DiscoverPage;
