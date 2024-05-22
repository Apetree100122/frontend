import React from 'react';
import './Sidebar.css';


const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="sidebar-menu">
                <a href="#" className="menu-item">
                    <div className="menu-icon">🌟</div>
                    <div className="menu-text">AI Art</div>
                </a>
                <a href="#" className="menu-item">
                    <div className="menu-icon">💡</div>
                    <div className="menu-text">DeFi</div>
                </a>
            </div>
            <div className="sidebar-bottom">
                <a href="#" className="menu-item">
                    <div className="menu-icon"></div>
                    <div className="menu-text">Help</div>
                </a>
                <a href="#" className="menu-item">
                    <div className="menu-icon">⚙️</div>
                    <div className="menu-text">Setting</div>
                </a>
            </div>
        </div>
    );
}

export default Sidebar;