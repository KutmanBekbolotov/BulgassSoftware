import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className='sidebar_toggle' onClick={toggleSidebar}>
                {isOpen ? '≪' : '≫'} {/* Используем символы Unicode или HTML-коды */}
            </button>
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div>
                    {/* Содержимое sidebar */}
                    <h1>Sidebar</h1>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
