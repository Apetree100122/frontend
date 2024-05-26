import React from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';
import wallet from "../assets/wallet.png";
import profileImage from "../assets/lc.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";
import { ConnectButton } from '@rainbow-me/rainbowkit';
// Header.PropTypes = {
//     image1: PropTypes.string,
//     image2: PropTypes.string,
//     image3: PropTypes.string,
//     image4: PropTypes.string,
// };

const Header = () => {

    const navigate = useNavigate();

    const handleHomeAction = () => {
        navigate('/')
    }

    return (
        <header className="header">
            <div className="logo-button">
                <button onClick={handleHomeAction}>Logo</button>
            </div>
            <div className="header-buttons">
                <button className="notification-button">
                        <FontAwesomeIcon className={"notification-badge"} color={"gold"} icon={faBell} size="2x"/>
                </button>
                    <ConnectButton />
                <div className="profile-image-container">
                    <img src={profileImage} alt="Profile" className="profile-image"/>
                </div>
            </div>
        </header>
    );
}

export default Header;