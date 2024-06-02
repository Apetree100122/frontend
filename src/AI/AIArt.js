import React, { useState } from 'react';
import './AIArt.css';
import model1Image from '../assets/stable-1.png';
import model2Image from '../assets/stable-2.jpg';
import uploadIcon from '../assets/photo-gallery.png';
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import OpenAI from 'openai/index.mjs';

const AIArt = () => {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, dangerouslyAllowBrowser: true });
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState(null);
  const [url, setUrl] = useState("");

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

  const handleMint = () => {
    // Handle minting action
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
                  <button className="mint-button" onClick={handleMint}>Mint</button>
                  <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                </div>
              </div>
            </div>
        )}
      </div>
  );
};

export default AIArt;
