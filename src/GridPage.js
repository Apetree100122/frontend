// GridPage.js
import React from 'react';

const GridPage = () => {
  return (
    <div className="grid-page">
      <div className="text-container">
        <h1>Grid Page Heading</h1>
        <p>This is some text for the grid page.</p>
      </div>
      <div className="image-grid">
        {[...Array(9)].map((_, index) => (
          <img key={index} src={`image${index + 1}.jpg`} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default GridPage;
