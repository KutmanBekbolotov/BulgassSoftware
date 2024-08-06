import React from "react";
import { Link } from "react-router-dom";
import "./homePage.css";
import logo from "../assets/logo.gif";
import toggleSidebar from "./sidebar/sidebar";

const services = [
    { name: 'Listen Up', icon: logo, link: 'https://listen-upp.netlify.app' } // Используйте полный URL для внешних ссылок
];

const Home = () => {
    return (
        
        <div className="app-menu">
            <toggleSidebar/>
            <div className="header">
                <h1>Bulgass software</h1>
            </div>
            {services.map((service) => (
                <a href={service.link} key={service.name} className="menu-item" target="_blank" rel="noopener noreferrer">
                    <img src={service.icon} alt={service.name} className="icon"/>
                    <span>{service.name}</span>
                </a>
            ))}
        </div>
    );
};

export default Home;
