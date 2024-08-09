import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/sidebar/sidebar';
import backgroundIcon from '../assets/icons/settingsIcon.png'; 
import sidebar from '../assets/icons/sidebar.png';
import "./settings.css";

const SettingsPageComponent = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Sidebar />
      <h2>Настройки</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/settings/background">
          <div style={iconStyle}>
            <img src={backgroundIcon} alt="Background Settings" style={iconImageStyle} />
            <p>Фон <style color='white'/></p>
          </div>
        </Link>
        <Link to={"/settings/sidebar"}>
            <div style={iconStyle}>
                <img src={sidebar} alt="Sidebar Settings" style={iconImageStyle} />
                <p>Sidebar <style color='white'/></p>
            </div>
        </Link>
      </div>
    </div>
  );
};

const iconStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '20px',
  cursor: 'pointer',
  textAlign: 'center',
  color: '#white',
};

const iconImageStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  marginBottom: '10px'
};

export default SettingsPageComponent;
