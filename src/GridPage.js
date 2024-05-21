// GridPage.js
import React from 'react';
import sponser from './assets/sponser.jpg'


const GridPage = () => {
  return (
    <div className="grid-page">
      <div className="text-container">
        <h1>Our Partners</h1>
        <p>The largest and unique Super rare NFT marketplace For crypto-collectibles.</p>
      </div>
      <div className="image-grid">
  <img src={sponser} alt="Image 1" />
</div>
    </div>
  );
};

export default GridPage;
