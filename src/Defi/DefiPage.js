import React from 'react';
import './DefiPage.css';
import profileImage from '../assets/lc.png';
import casinoIcon from '../assets/lc.png';
import defiIcon from '../assets/invoice-1.png';
import aiArtIcon from '../assets/photo-gallery.png';
import helpIcon from '../assets/school.png';
import settingsIcon from '../assets/settings.png';
import console from '../assets/joystick.png';
import Header from '../Header/Header';
import wallet from '../assets/wallet.png';

const DefiPage = () => {
  return (
    <div className="defi-page">
      <Header/>
      <aside className="sidebar">
        <div className="sidebar-top">
          <a href='fjr.cpm'><img height={30} src={console} alt="Casino" /></a>
          <h6>Casino</h6>
          <a href='fjr.cpm'><img height={30} src={defiIcon} alt="DeFi" /></a>
          <h6>Defi</h6>
          <a href='fjr.cpm'><img height={30} src={aiArtIcon} alt="AI Art" /></a>
          <h6>AI</h6>
        </div>
        <div className="sidebar-bottom">
          <a href='fjr.cpm'><img height={30} src={helpIcon} alt="Help" /></a>
          <h6>Help</h6>
          <a href='fjr.cpm'><img height={25} src={settingsIcon} alt="Settings" /></a>
          <h6>Settings</h6>
        </div>
      </aside>
      <main className="main-content5">
        <div className="welcome-section">
          <h1>Welcome To DeFi</h1>
          <div className="balance-display">
            <span>Bal :</span>
            <span className="balance-amount">$1,500.00</span>
          </div>
        </div>
        <p>Deposit crypto to register and play in our high class slots and casinos</p>
        <div className="borrowing-section">
          <div className="borrowing-box">
            <h2>Borrowing</h2>
            <div className="borrow-box">
              <div>
                <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=023" alt="USDT Logo" className="token-logo" />
                <span className="current-balance">0.003223</span>
                <span className="current-label">Current</span>
              </div>
              <input type="text" placeholder="Max transferable 2,489 USDT" />
              <div className="borrow-buttons">
                <button>Borrow</button>
                <button>PayBack</button>
              </div>
            </div>
            <div className="borrow-box">
              <div>
                <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=023" alt="USDT Logo" className="token-logo" />
                <span className="current-balance">1345</span>
                <span className="current-label">Current</span>
              </div>
              <input type="text" placeholder="Max transferable 2,489 USDT" />
              <div className="borrow-buttons">
                <button>Borrow</button>
                <button>PayBack</button>
              </div>
            </div>
          </div>
        </div>
        <div className="deposit-collateral">
          <h2>Deposit collateral</h2>
          <table className="collateral-table">
            <thead>
              <tr>
                <th>Assets</th>
                <th>Attribute</th>
                <th>Price</th>
                <th>APY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cosmic Cat</td>
                <td>meme</td>
                <td>5.2 ETH</td>
                <td>120 ETH</td>
              </tr>
              <tr>
                <td>Cosmic Cat</td>
                <td>meme</td>
                <td>5.2 ETH</td>
                <td>120 ETH</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DefiPage;
