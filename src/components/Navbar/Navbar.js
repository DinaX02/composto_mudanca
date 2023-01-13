import React, { useState } from "react";
import logo from '../Navbar/logo_composto_mudanca-8.png'
import './Navbar.css'
import AuthDetails from "../auth/AuthDetails";
import {auth} from '../../firebase';
import {onAuthStateChanged, signOut} from "firebase/auth";


const Navbar = ()=> {

    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="Navbar">
            <span className="nav-logo">
                <a href="/"><img className="logo" src={logo}/></a>
            </span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/about">About us</a>
                <a href="/service">Nosso Serviço</a>
                <a href="/signup">Log In</a>

            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=>setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar
