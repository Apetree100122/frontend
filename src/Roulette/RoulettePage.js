import React from 'react';
import './RoulettePage.css';
import profileImage from '../assets/lc.png';
import casinoIcon from '../assets/lc.png';
import defiIcon from '../assets/invoice-1.png';
import aiArtIcon from '../assets/photo-gallery.png';
import helpIcon from '../assets/school.png';
import settingsIcon from '../assets/settings.png';
import console from '../assets/joystick.png';
import wallet from '../assets/wallet.png';
import casino from '../assets/casino-lo.png'
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const RoulettePage = () => {
  return (
    <div className="roulette-page">
      <Header />
      <Sidebar />
      <main className="main-content2">
        <div className="welcome-section">
          <h1>Good Morning, Amann</h1>
          <span className="balance-display">Bal: <span className="balance-amount">$1,500.00</span></span>
        </div>
        <div className="roulette-section">
          <div className="roulette-wheel">
            <img src={casino} alt="Roulette Wheel" />
          </div>
          <div className="roulette-table">
            <div className="number-row">
              {Array.from({ length: 36 }, (_, i) => (
                <div className={`number-cell ${i % 2 === 0 ? 'red' : 'black'}`} key={i}>
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="betting-options">
              <div className="bet-option">1 to 12</div>
              <div className="bet-option">25 - 30</div>
              <div className="bet-option">25 - 30</div>
              <div className="bet-option">1 - 18</div>
              <div className="bet-option">Odd</div>
              <div className="bet-option">Even</div>
              <div className="bet-option">19 to 36</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RoulettePage;
