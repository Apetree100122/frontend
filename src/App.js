// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import DiscoverPage from './Discovery/DiscoverPage';
import './LandingPage.css';
import AIArt from './AI/AIArt';
import DefiPage from './Defi/DefiPage';
import RoulettePage from './Roulette/RoulettePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/discover" element={<DiscoverPage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path='/ai' element={<AIArt/>} />
        <Route path='/defi' element={<DefiPage/>} />
        <Route path='/game' element={<RoulettePage/>} />
        </Routes>
    </Router>
  );
}

export default App;
