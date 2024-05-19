// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import DiscoverPage from './DiscoverPage';
import './LandingPage.css';
import AIArt from './AIArt';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/discover" element={<DiscoverPage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path='/ai' element={<AIArt/>} />
        </Routes>
    </Router>
  );
}

export default App;
