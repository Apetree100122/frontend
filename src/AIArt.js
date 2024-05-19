import React from 'react';
import './AIArt.css';
import model1Image from './assets/lc.png';
import model2Image from './assets/lc.png';
import image3 from './assets/lc.png';

const AIArt = () => {
  return (
    <div className="ai-page">
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

    <main className="main-content2">
  <h1>Generate Profile Pics with AI</h1>
  <div className='main-content21'>
  <div className="input-container">
    <input type="text" placeholder="Prompt" />
    <button>Generate</button>
  </div>
  <div className="upload-container">
    <div className="dropdown">
      <select>
        <option value="">Upload Cover Art</option>
        {/* Add other options if needed */}
      </select>
    </div>
    <button>Upload</button>
  </div>
  </div>
  <h2>Pick Model</h2>
        <div className="model-container">
          <div className="model-option">
            <img src={model1Image} alt="Model 1" />
            <span>Model 1</span>
          </div>
          <div className="model-option">
            <img src={model2Image} alt="Model 2" />
            <span>Model 2</span>
          </div>
        </div>
</main>
  </div>
  );
}

export default AIArt;