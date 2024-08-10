import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import changeSide from '../../settings/settingsComponent';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className={!changeSide ? 'sidebar_toggle_right' : 'sidebar_toggle'} onClick={toggleSidebar}>
                {isOpen ? 'close' : 'open'}
            </button>
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-content">
                    <Link to="/" className="sidebar-link" onClick={toggleSidebar}>Home</Link>
                    <Link to="/see-more" className="sidebar-link" onClick={toggleSidebar}>More</Link>
                    <Link to="/tutorial" className="sidebar-link" onClick={toggleSidebar}>Tutorials</Link>
                    <Link to="/newsPage" className="sidebar-link" onClick={toggleSidebar}>News</Link>
                    <Link to="/libary" className="sidebar-link" onClick={toggleSidebar}>Books</Link>
                    <Link to="/settings" className="sidebar-link" onClick={toggleSidebar}>Settings</Link>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
