import React, { useState } from 'react';
import './AIArt.css';
import model1Image from '../assets/stable-1.png';
import model2Image from '../assets/stable-2.jpg';
import image3 from '../assets/lc.png';
import profileImage from '../assets/lc.png';
import casinoIcon from '../assets/lc.png';  // Replace with actual paths to your icons
import defiIcon from '../assets/invoice-1.png';
import aiArtIcon from '../assets/photo-gallery.png';
import helpIcon from '../assets/school.png';
import settingsIcon from '../assets/settings.png';
import joystickIcon from '../assets/joystick.png';
import wallet from '../assets/wallet.png';
import uploadIcon from '../assets/photo-gallery.png';
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import OpenAI from 'openai/index.mjs';
import { create  } from 'ipfs-http-client';

const ipfs = create({ host: 'localhost', port: 5001, protocol: 'http' })

const AIArt = () => {
  // Read the API key from the environment variable
  const openai = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState(null);
  const [url, setUrl] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  const handleModelClick = (model) => {
    if (selectedModel === model) {
      setSelectedModel(null); // Deselect the model if already selected
    } else {
      setSelectedModel(model); // Select the model if not selected
    }
  };

  

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const response = await openai.images.generate({
        model: "dall-e-2",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      });
      const image_url = response.data[0].url;
      setUrl(image_url);
      setGeneratedImage(image_url);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMint = async () => {
    if (!generatedImage){
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(generatedImage);
      const imageBlob = await response.blob();
      const file = new File([imageBlob], 'generated-image.png', { type: 'image/png' });
      console.log(file);
      const added = await ipfs.add(file);

      const url = `https://ipfs.io/ipfs/${added.path}`;
      setUploadedImageUrl(url);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  const handleCancel = () => {
    setGeneratedImage(null);
  };

  return (
      <div className="ai-page">
        <Header />
        <Sidebar />
        <main className="main-content3">
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
            <div className='temp-div'>
              <div className="upload-container">
                <div className="file-upload-wrapper-out">
                  <img src={uploadIcon} alt="Upload Icon" className="upload-icon" />
                  <label htmlFor="fileUpload">Upload Cover Art</label>
                  <input type="file" id="fileUpload" />
                </div>
              </div>
              <div className='upload-button'>
                <button>Upload</button>
              </div>
            </div>
          </div>
          <h2>Pick Model</h2>
          <div className="model-container">
            <div className="model-option" onClick={() => handleModelClick('model1')}>
              <img src={model1Image} alt="Model 1" className={selectedModel === 'model1' ? 'selected' : ''} />
              <span>Model 1</span>
            </div>
            <div className="model-option" onClick={() => handleModelClick('model2')}>
              <img src={model2Image} alt="Model 2" className={selectedModel === 'model2' ? 'selected' : ''} />
              <span>Model 2</span>
            </div>
          </div>
        </main>

        {isLoading && (
            <div className="modal">
              <div className="modal-content">
                <h2>Generating...</h2>
              </div>
            </div>
        )}

{generatedImage && (
        <div className="modal">
          <div className="modal-content">
            <img src={generatedImage} alt="Generated" className="generated-image" />
            <p className="prompt-text">{prompt}</p>
            <div className="modal-buttons">
              <button className="mint-button" onClick={handleMint} disabled={isLoading}>
                {isLoading ? 'Minting...' : 'Mint'}
              </button>
              <button className="cancel-button" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}

{uploadedImageUrl && (
        <div>
          <p>Image uploaded to IPFS:</p>
          <a href={uploadedImageUrl} target="_blank" rel="noopener noreferrer">
            {uploadedImageUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default AIArt;
