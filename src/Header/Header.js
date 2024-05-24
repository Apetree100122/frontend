import React from 'react';
import './Header.css';
import wallet from "../assets/wallet.png";
import profileImage from "../assets/lc.png";
import PropTypes from "prop-types";

// Header.PropTypes = {
//     image1: PropTypes.string,
//     image2: PropTypes.string,
//     image3: PropTypes.string,
//     image4: PropTypes.string,
// };

const Header = () => {

    return (
        <header className="header">
            <div className="logo-button">
                <button>Logo</button>
            </div>
            <div className="header-buttons">
                <button className="notification-button">
                    <span className="notification-badge"></span>
                </button>
                <button className="connect-button">
                    <img src={wallet} alt="Wallet Logo" className="connect-logo"/>
                    Connect
                </button>
                <div className="profile-image-container">
                    <img src={profileImage} alt="Profile" className="profile-image"/>
                </div>
            </div>
        </header>
    );
}

export default Header;