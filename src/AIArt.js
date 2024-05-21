import React, { useState } from 'react';
import './AIArt.css';
import model1Image from './assets/lc.png';
import model2Image from './assets/lc.png';
import image3 from './assets/lc.png';
import profileImage from './assets/lc.png';
import casinoIcon from './assets/lc.png';  // Replace with actual paths to your icons
import defiIcon from './assets/invoice-1.png';
import aiArtIcon from './assets/photo-gallery.png';
import helpIcon from './assets/school.png';
import settingsIcon from './assets/settings.png';
import console from './assets/joystick.png'
import wallet from './assets/wallet.png'

const AIArt = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [prompt, setPrompt] = useState('');

  const handleGenerate = () => {
    setIsLoading(true);

    // Simulate image generation delay
    setTimeout(() => {
      setGeneratedImage(image3); // Replace with actual generated image
      setIsLoading(false);
    }, 5000);
  };

  const handleMint = () => {
    // Handle minting action
  };

  const handleCancel = () => {
    setGeneratedImage(null);
  };

  return (
    <div className="ai-page">
<header className="header">
  <div className="logo-button">
    <button>Logo</button>
  </div>
  <div className="header-buttons">
    <button className="notification-button">
      <span className="notification-badge"></span>
    </button>
    <button className="connect-button">
      <img src={wallet} alt="Wallet Logo" className="connect-logo" />
      Connect
    </button>
    <div className="profile-image-container">
      <img src={profileImage} alt="Profile" className="profile-image" />
    </div>
  </div>
</header>
      <aside className="sidebar">
        <div className="sidebar-top">
            <img height={30} src={console} alt="Casino" />
            <img height={30} src={defiIcon} alt="DeFi" />
            <img height={30} src={aiArtIcon} alt="AI Art" />
        </div>
        <div className="sidebar-bottom">
            <img height={30} src={helpIcon} alt="Help" />
            <img height={25} src={settingsIcon} alt="Settings" />
        </div>
      </aside>
      <main className="main-content2">
        <h1>Generate Profile Pics with AI</h1>
        <div className='main-content21'>
          <div className="input-container">
            <input 
              type="text" 
              placeholder="Prompt" 
              value={prompt} 
              onChange={(e) => setPrompt(e.target.value)} 
            />
            <button onClick={handleGenerate}>Generate</button>
          </div>
          <div className="upload-container">
            <input type="file" id="fileUpload" />
            <label htmlFor="fileUpload">Choose File</label>
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

      {isLoading && (
        <div className="modal">
          <div className="modal-content">
            <h2 style={{ color: 'black' }}>Generating...</h2>
          </div>
        </div>
      )}

      {generatedImage && (
        <div className="modal">
          <div className="modal-content">
            <img src={generatedImage} alt="Generated" className="generated-image" />
            <p className="prompt-text">{prompt}</p>
            <div className="modal-buttons">
              <button onClick={handleMint}>Mint</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIArt;
