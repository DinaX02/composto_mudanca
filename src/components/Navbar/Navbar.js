import React, { useState } from "react";
import logo from '../Navbar/logo_composto_mudanca-8.png'
import './Navbar.css'

const Navbar = ()=> {

    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="Navbar">
            <span className="nav-logo">
                <img className="logo" src={logo}/>
            </span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/about">About us</a>
                <a to="/service">Nosso Serviço</a>
                <a to="/signup">Log In</a>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=>setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar
