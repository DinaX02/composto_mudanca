import React from "react";
import AuthDetails from "../auth/AuthDetails";



function Settings() {
    return (
        <div className="float-right CompSettings position-relative">
            <ul className='position-absolute right-0 t-100 w-100'>
                <li><AuthDetails/></li>
                <hr/>
                <li>Settings</li>
            </ul>
        </div>
    );
}

export default Settings;
