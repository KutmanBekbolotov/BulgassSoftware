import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/sidebar/sidebar';
import backgroundIcon from '../assets/icons/backgound.png'; 
import sidebar from '../assets/icons/sidebar.png';
import "./settings.css";

const SettingsPageComponent = () => {
  return (
    <div className="settings-container">
      <Sidebar />
      <h2 className="settings-title">Настройки</h2>
      <div className="icons-container">
        <Link to="/settings/background">
          <div className="icon">
            <img src={backgroundIcon} alt="Background Settings" className="icon-image" />
            <p className="icon-text">Фон</p>
          </div>
        </Link>
        <Link to="/settings/sidebar">
          <div className="icon">
            <img src={sidebar} alt="Sidebar Settings" className="icon-image" />
            <p className="icon-text">Sidebar</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SettingsPageComponent;
