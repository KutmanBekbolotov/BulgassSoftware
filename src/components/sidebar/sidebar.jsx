import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [side, setSide] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const changeSide = () => {
        setSide(!side)
    };

    return (
        <>
            <button className={`${!side ? 'sidebar_toggle' : 'sidebar_toggle_right' }`} onClick={toggleSidebar}>
                {isOpen ? '≪' : '≫'}
            </button>
            <aside className={`${isOpen ? 'open' : ''} ${side ? 'rightSide': 'sidebar'}`}>
                <div className="sidebar-content">
                    <Link to="/" className="sidebar-link" onClick={toggleSidebar}>Home</Link>
                    <Link to="/see-more" className="sidebar-link" onClick={toggleSidebar}>More</Link>
                    <Link to="/tutorial" className="sidebar-link" onClick={toggleSidebar}>Tutorials</Link>
                    <Link to="/newsPage" className="sidebar-link" onClick={toggleSidebar}>News</Link>
                    <Link to="/settings" className="sidebar-link" onClick={toggleSidebar}>Settings</Link>
                </div>
                <button onClick={changeSide} className={`${!side ? 'changeButton' : 'changeButtonRight'}`}>
                    Change side
                </button>
            </aside>
        </>
    );
};

export default Sidebar;
