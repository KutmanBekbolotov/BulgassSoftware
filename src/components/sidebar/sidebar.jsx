import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className='sidebar_toggle' onClick={toggleSidebar}>
                {isOpen ? '≪' : '≫'}
            </button>
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-content">
                    <Link to="/" className="sidebar-link" onClick={toggleSidebar}>Home</Link>
                    <Link to="/see-more" className="sidebar-link" onClick={toggleSidebar}>More Information</Link>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
