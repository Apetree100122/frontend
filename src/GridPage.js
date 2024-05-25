import React from 'react';
import polygon from './assets/polygon.png'; // Replace with your actual image paths
import avalanche from './assets/avalanche.png';
import zksync from './assets/zksync.png';
import moonbeam from './assets/moonbeam.png';
import quicknode from './assets/quicknode.png';
import scroll from './assets/scroll.png';
import metis from './assets/metis.png';
import dextools from './assets/dextools.png';
import swan from './assets/swan.webp';

const GridPage = () => {
  const partners = [
    { name: 'Polygon', image: polygon },
    { name: 'Avalanche', image: avalanche },
    { name: 'zkSync', image: zksync },
    { name: 'Moonbeam', image: moonbeam },
    { name: 'QuickNode', image: quicknode },
    { name: 'Scroll', image: scroll },
    { name: 'METIS', image: metis },
    { name: 'DEXTOOLS', image: dextools },
    { name: 'SWAN', image: swan }
  ];

  return (
    <div className="grid-page">
      <div className="text-container">
        <h1>Our Partners</h1>
        <p>The largest and unique Super rare NFT marketplace For crypto-collectibles.</p>
      </div>
      <div className="image-grid">
        {partners.map((partner, index) => (
          <div className="grid-item" key={index}>
            <img src={partner.image} alt={partner.name} />
            <div className="partner-info">
              <span>{partner.name}</span>
              <button>Follow</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridPage;
