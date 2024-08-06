import React, { useState } from 'react';
import './sidebar.css';

 const toggleSidebar = () => {
    setIsOpen(!isOpen);

    return(
        <>
            <button className='sidebar_toggle' onClick={toggleSidebar}>
                {isOpen ? '<':'>'}     
            </button>
            <aside className= {`sidebar ${isOpen ? 'open' : ''}`}>
                <div></div>
            </aside>
        </>
     );
    
};

export default toggleSidebar;


