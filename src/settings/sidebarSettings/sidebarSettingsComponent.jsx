import React, {useState} from 'react';
import Sidebar from "../../components/sidebar/sidebar";


const SidebarSettingsComponent = () => {

    const [changeSide, setChangeSide] = useState(false);

    const rightSide = () => {
        setChangeSide(!changeSide);
    };

    return (
        <div>
            <Sidebar/>
            <div className={"changeButton"}>
            </div>
        </div>
    );
};

export default SidebarSettingsComponent;