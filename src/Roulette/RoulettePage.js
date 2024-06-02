import React, { useState, useRef } from 'react';
import './RoulettePage.css';
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import rouletteImage from "../assets/roulette7.jpeg";



const RoulettePage = () => {
    const [angle, setAngle] = useState(0);
    const [betAmt, setBetAmt] = useState(0);
    const wheelRef = useRef(null);

    // create a function that grabs the contract method placebet

    const spinWheel = () => {
        const newAngle = Math.floor(Math.random() * 360) + 3600; // 3600 ensures multiple spins
        setAngle(newAngle);

        // Set the final angle as a CSS variable for keyframe animation
        if (wheelRef.current) {
            wheelRef.current.style.setProperty('--final-angle', `${newAngle}deg`);
            wheelRef.current.style.animation = 'none'; // Reset animation
            // Trigger reflow to restart the animation
            void wheelRef.current.offsetHeight;
            wheelRef.current.style.animation = 'spin 3s ease-out';
          }
    };

    const segments = Array.from({ length: 37 }, (_, i) => i); // Generate 0-36 segments for betting table

    return (
        <div className="roulette-page">
            <Header />
            <Sidebar />
            <main className="main-content2">
                <div className="roulette-container">
                    <div className="wheel" ref={wheelRef} style={{ backgroundImage: `url(${rouletteImage})` }}></div>
                    <button onClick={spinWheel}>Spin</button>
                </div>
                <div className="table-container">
                    <div className="table-header">Place Your Bets</div>
                    <div className="betting-table">
                        {segments.map((segment) => (
                            <div key={segment} className={`betting-cell ${segment % 2 === 0 ? 'even' : 'odd'}`}>
                                <span>{segment}</span>
                            </div>
                        ))}
                    </div>
                    <div className="table-footer">Good Luck!</div>
                </div>
            </main>
        </div>
    );
};

export default RoulettePage;
