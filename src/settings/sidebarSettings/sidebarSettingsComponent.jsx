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
                <button onClick={rightSide} style={{
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