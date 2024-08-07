import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/homePage';
import SeeMore from './components/pages/seeMore'; 

function App(){
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/see-more" element={<SeeMore/>} /> 
                </Routes>
            </div>
        </Router>
    );
}

export default App;
