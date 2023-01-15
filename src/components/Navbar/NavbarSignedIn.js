import React, { useState } from "react";
import './Navbar.css'
import AuthDetails from "../auth/AuthDetails";




const Navbar = ()=> {

    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="Navbar">

                <div className='imgMenu avatar'>
                <a href='/perfil'> <img src='https://avatars.dicebear.com/api/big-smile/9.svg'/> </a>
                </div>


            <div className={`nav-items ${isOpen && "open"} ola`}>
                <a href=""> <AuthDetails/></a>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar
