import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/homePage';
import SeeMore from './components/pages/seeMore'; 
import Tutorial from "./nativeServices/tutorial";
import Settings from "./settings/settings";
import BackgroundSettings from "./settings/backgroundSettings/backgroundSettings";
import SidebarSettings from "./settings/sidebarSettings/sidebarSettings";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/see-more" element={<SeeMore />} />
                    <Route path="/tutorial" element={<Tutorial />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/settings/background" element={<BackgroundSettings />} />
                    <Route path="/settings/sidebar" element={<SidebarSettings/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
