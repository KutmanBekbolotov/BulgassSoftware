import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import background1 from '../../assets/backgrounds/background1.jpg';
import background2 from '../../assets/backgrounds/background2.jpg';
import background3 from '../../assets/backgrounds/background3.png';
import background4 from '../../assets/backgrounds/background4.jpg';
import background5 from '../../assets/backgrounds/background5.jpg';
import background6 from '../../assets/backgrounds/background6.jpg';
import './backgroundSettings.css'; 

const backgrounds = [
  { url: background1, label: 'Background 1' },
  { url: background2, label: 'Background 2' },
  { url: background3, label: 'Background 3' },
  { url: background4, label: 'Background 4' },
  { url: background5, label: 'Background 5' },
  { url: background6, label: 'Background 6' },
];

const gradients = [
  'linear-gradient(to right, #ef32d9, #89fffd)', // azure pop
  'linear-gradient(to right, #3a6186, #89253e)', // love couples
  'linear-gradient(to right, #4ecdc4, #556270)', // disco
  'linear-gradient(to right, #a1ffce, #faffd1)', // limeade
  'linear-gradient(to right, #d53369, #daae51)', // bloody mimosa
  'linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)', //aqua sprey
  'linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)', //shady lane
  'linear-gradient(90deg, #0700b8 0%, #00ff88 100%)', //Ooey gooey
];

const BackgroundSettingsComponent = () => { 
  const savedBackground = localStorage.getItem('background');
  const [selectedBackground, setSelectedBackground] = useState('');
  const [isImageBackground, setIsImageBackground] = useState(true);

  useEffect(() => {
    if (savedBackground) {
      setSelectedBackground(savedBackground);
      setIsImageBackground(!gradients.includes(savedBackground));
    } else {
      const defaultGradient = gradients[0];
      setSelectedBackground(defaultGradient);
    }
    if (savedBackground && !gradients.includes(savedBackground)) {
      document.body.style.backgroundImage = `url(${savedBackground})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundAttachment = 'fixed'; 
    } else {
      document.body.style.backgroundImage = '';
      document.body.style.background = savedBackground || gradients[0];
      document.body.style.backgroundSize = 'cover';
    }
  }, [savedBackground]);

  const handleBackgroundChange = (url) => {
    setSelectedBackground(url);
  };

  const handleSetBackground = () => {
    localStorage.setItem('background', selectedBackground);
    if (!gradients.includes(selectedBackground)) {
      document.body.style.backgroundImage = `url(${selectedBackground})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundAttachment = 'fixed'; 
    } else {
      document.body.style.backgroundImage = '';
      document.body.style.background = selectedBackground;
      document.body.style.backgroundSize = 'cover';
    }
  };

  return (
    <div style={{ padding: '30px', minHeight: '100vh' }}> 
      <Sidebar />
      <h2>Настройки фона</h2>
      <div className="button-container">
        <button onClick={() => setIsImageBackground(true)} className="toggle-button">Изображение</button>
        <button onClick={() => setIsImageBackground(false)} className="toggle-button">Градиент</button>
      </div>
      <div className="background-container">
        {isImageBackground ? (
          <div className="backgrounds">
            {backgrounds.map((bg, index) => (
              <div
                key={index}
                className={`background-item ${selectedBackground === bg.url ? 'selected' : ''}`}
                style={{
                  backgroundImage: `url(${bg.url})`,
                }}
                onClick={() => handleBackgroundChange(bg.url)}
              ></div>
            ))}
          </div>
        ) : (
          <div className="backgrounds">
            {gradients.map((gradient, index) => (
              <div
                key={index}
                className={`background-item ${selectedBackground === gradient ? 'selected' : ''}`}
                style={{
                  background: gradient,
                }}
                onClick={() => handleBackgroundChange(gradient)}
              ></div>
            ))}
          </div>
        )}
      </div>
      <button 
        onClick={handleSetBackground}
        className="set-button"
      >
        Установить
      </button>
    </div>
  );
};

export default BackgroundSettingsComponent;
