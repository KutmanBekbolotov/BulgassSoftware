import React from "react";
import "./homePage.css";
import logo from "../assets/icons/logo.gif";
import bulgass from "../assets/icons/bulgass.png"; 
import react from "../assets/icons/react.png";
import note from "../assets/icons/note.jpg";
import Sidebar from "./sidebar/sidebar";
import WeatherWidget from "./widgets/weatherWidget/weatherWidget";
import Clock from "./widgets/clockWidget/clockWidget"
import instagram1 from "../assets/icons/instagram1.webp";
import telega from "../assets/icons/telega.png";
import github from "../assets/icons/github.png";
import chatgpt from "../assets/icons/chatgpt.png";

const services = [
    { name: 'Listen Up', icon: logo, link: 'https://listen-upp.netlify.app' },
    { name: 'BSW', icon: bulgass, link: 'https://bulgass-soft-works.netlify.app' },
    { name: 'Learn React', icon: react, link: 'https://legacy.reactjs.org/tutorial/tutorial.html'}, 
    { name: 'Note', icon: note, link: 'https://onlinenotepad.org/notepad'},
    { name: 'Instagram', icon: instagram1, link: 'https://www.instagram.com/bulgass.it/'},
    { name: 'Tg group', icon: telega, link: 'https://t.me/+ejlSjQzju0UyZTQy'},
    { name: 'GitHub', icon: github, link: 'https://github.com/'},
    { name: 'ChatGPT', icon: chatgpt, link: 'https://chatgpt.com/'},
];

const Home = () => (
    <div className="app-menu">
        <div className="container">
            <Sidebar />
            <div className="header">
                <img src={bulgass} alt="Header" className="header-image" />
                <h1>Web OS</h1>
                <pre>version: development</pre>
            </div>
              <div className="container-widget">
                 <div className="weather-container">
                     <WeatherWidget />
                 </div>
                 <div className="clock-container">
                     <Clock />
                 </div>
                </div>  
        </div>
        <div className="services">
            {services.map((service) => (
                <a href={service.link} key={service.name} className="menu-item" target="_blank" rel="noopener noreferrer">
                    <img src={service.icon} alt={service.name} className="icon" />
                    <span>{service.name}</span>
                </a>
            ))}
        </div>
    </div>
);

export default Home;
