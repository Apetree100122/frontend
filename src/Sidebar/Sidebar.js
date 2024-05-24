import React from 'react';
import './Sidebar.css';
import console from "../assets/joystick.png";
import defiIcon from "../assets/invoice-1.png";
import aiArtIcon from "../assets/photo-gallery.png";
import helpIcon from "../assets/school.png";
import settingsIcon from "../assets/settings.png";


const Sidebar = () => {

    return (
        <aside className="sidebar">
            <div className="sidebar-top">
                <a href='fjr.cpm'><img height={30} src={console} alt="Casino"/></a>
                <h6>Casino</h6>
                <a href='fjr.cpm'><img height={30} src={defiIcon} alt="DeFi"/></a>
                <h6>Defi</h6>
                <a href='fjr.cpm'><img height={30} src={aiArtIcon} alt="AI Art"/></a>
                <h6>AI</h6>
            </div>
            <div className="sidebar-bottom">
                <a href='fjr.cpm'><img height={30} src={helpIcon} alt="Help"/></a>
                <h6>Help</h6>
                <a href='fjr.cpm'><img height={25} src={settingsIcon} alt="Settings"/></a>
                <h6>Settings</h6>
            </div>
        </aside>
    );
}

export default Sidebar;