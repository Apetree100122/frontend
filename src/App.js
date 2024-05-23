// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import DiscoverPage from './DiscoverPage';
import './LandingPage.css';
import AIArt from './AIArt';
import DefiPage from './DefiPage';
import RoulettePage from './RoulettePage';

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
