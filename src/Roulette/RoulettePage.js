import React, { useState, useRef } from 'react';
import './RoulettePage.css';
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import rouletteImage from "../assets/roulette7.jpeg";

const RoulettePage = () => {
    const [angle, setAngle] = useState(0);
    const [betAmt, setBetAmt] = useState(0);
    const [activeBets, setActiveBets] = useState([]);
    const wheelRef = useRef(null);

    const spinWheel = () => {
        const newAngle = Math.floor(Math.random() * 360) + 3600; // 3600 ensures multiple spins
        setAngle(newAngle);

        if (wheelRef.current) {
            wheelRef.current.style.setProperty('--final-angle', `${newAngle}deg`);
            wheelRef.current.style.animation = 'none'; // Reset animation
            void wheelRef.current.offsetHeight;
            wheelRef.current.style.animation = 'spin 3s ease-out';
        }
    };

    const segments = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];
    const additionalBets = ['1 to 12', '13 to 24', '25 to 36', '1 - 18', 'Odd', 'Even', '19 to 36'];

    const toggleBet = (bet) => {
        setActiveBets((prevBets) =>
            prevBets.includes(bet) ? prevBets.filter((b) => b !== bet) : [...prevBets, bet]
        );
    };

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
                            <div
                                key={segment}
                                className={`betting-cell ${segment % 2 === 0 ? 'even' : 'odd'} ${activeBets.includes(segment) ? 'active' : ''}`}
                                onClick={() => toggleBet(segment)}
                            >
                                <span>{segment}</span>
                            </div>
                        ))}
                    </div>
                    <div className="additional-bets">
                        {additionalBets.map((bet) => (
                            <div
                                key={bet}
                                className={`betting-cell additional ${activeBets.includes(bet) ? 'active' : ''}`}
                                onClick={() => toggleBet(bet)}
                            >
                                <span>{bet}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RoulettePage;
