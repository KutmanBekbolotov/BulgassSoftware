import React, {useState} from 'react';
import Sidebar from "../../components/sidebar/sidebar";


const SidebarSettingsComponent = () => {


    return (
        <div>
            <Sidebar/>
            <div className={"changeButton"}>
                <button style={{
                    marginLeft: "50%",
                    marginTop: "10%"
                }}>
                    change
                </button>
            </div>
        </div>
    );
};

export default SidebarSettingsComponent;