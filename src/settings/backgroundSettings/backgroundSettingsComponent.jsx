import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import background1 from '../../assets/backgrounds/background1.jpg';
import background2 from '../../assets/backgrounds/background2.jpeg';
import background3 from '../../assets/backgrounds/background3.png';

const backgrounds = [
  { url: background1, label: 'Background 1' },
  { url: background2, label: 'Background 2' },
  { url: background3, label: 'Background 3' },
];

const gradients = [
  'linear-gradient(to right, #ff7e5f, #feb47b)',
  'linear-gradient(to right, #6a11cb, #2575fc)',
  'linear-gradient(to right, #ff9a9e, #fad0c4)'
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
    <div style={{ padding: '20px', minHeight: '100vh' }}> 
      <Sidebar />
      <h2>Настройки фона</h2>
      <div>
        <h3>Выберите фон:</h3>
        <button onClick={() => setIsImageBackground(true)}>Изображение</button>
        <button onClick={() => setIsImageBackground(false)}>Градиент</button>
      </div>
      <div>
        {isImageBackground ? (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {backgrounds.map((bg, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${bg.url})`,
                  width: '150px',
                  height: '100px',
                  margin: '10px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: selectedBackground === bg.url ? '2px solid blue' : '2px solid transparent',
                  cursor: 'pointer'
                }}
                onClick={() => handleBackgroundChange(bg.url)}
              ></div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {gradients.map((gradient, index) => (
              <div
                key={index}
                style={{
                  background: gradient,
                  width: '150px',
                  height: '100px',
                  margin: '10px',
                  border: selectedBackground === gradient ? '2px solid blue' : '2px solid transparent',
                  cursor: 'pointer'
                }}
                onClick={() => handleBackgroundChange(gradient)}
              ></div>
            ))}
          </div>
        )}
      </div>
      <div
        style={{
          marginTop: '20px',
          height: '300px',
          background: selectedBackground,
          backgroundSize: isImageBackground ? 'cover' : 'auto',
          backgroundPosition: 'center',
          border: '1px solid black'
        }}
      >
        <p style={{ color: 'white', textAlign: 'center', paddingTop: '120px' }}>Превью выбранного фона</p>
      </div>
      <button 
        onClick={handleSetBackground}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Установить
      </button>
    </div>
  );
};

export default BackgroundSettingsComponent;
