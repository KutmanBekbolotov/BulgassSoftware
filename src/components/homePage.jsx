import React from "react";
import "./homePage.css";
import logo from "../assets/icons/logo.gif";
import Sidebar from "./sidebar/sidebar";

const services = [
    { name: 'Listen Up', icon: logo, link: 'https://listen-upp.netlify.app' }
];

const Home = () => {
    return (
        <div className="app-menu">
            <Sidebar /> 
            <div className="header">
                <h1>Bulgass Software</h1>
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
