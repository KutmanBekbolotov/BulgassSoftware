import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/homePage';
import SeeMore from './components/pages/seeMore'; 
import Tutorial from "./nativeServices/tutorial";
import Settings from "./settings/settings";
import BackgroundSettings from "./settings/backgroundSettings/backgroundSettings";
import SidebarSettings from "./settings/sidebarSettings/sidebarSettings"; 
import NewsPage from "./components/pages/newsPage";
import "./App.css";

function App() {
    const [bgColor, setBgColor] = useState(window.getComputedStyle(document.body).backgroundColor);

    useEffect(() => {
        function getBrightness(r, g, b) {
            return (r * 299 + g * 587 + b * 114) / 1000;
        }

        function setTextColorBasedOnBackground() {
            const rgb = bgColor.match(/\d+/g).map(Number);

            if (!rgb || rgb.length < 3) {
                console.log("Invalid RGB values");
                return;
            }

            const brightness = getBrightness(rgb[0], rgb[1], rgb[2]);
            const textColor = brightness > 100 ? 'black' : 'white';
            document.documentElement.style.setProperty('--text-color', textColor);
            console.log("Text Color:", textColor);
        }

        setTextColorBasedOnBackground();
    }, [bgColor]); 

    useEffect(() => {
        function handleBackgroundChange() {
            setBgColor(window.getComputedStyle(document.body).backgroundColor);
        }

        window.addEventListener('resize', handleBackgroundChange); // Пример, если фон меняется при ресайзе окна

        return () => window.removeEventListener('resize', handleBackgroundChange);
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/see-more" element={<SeeMore />} />
                    <Route path="/tutorial" element={<Tutorial />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/settings/background" element={<BackgroundSettings />} />
                    <Route path="/settings/sidebar" element={<SidebarSettings />} />
                    <Route path="/newsPage" element={<NewsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
