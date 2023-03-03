import React, { useState } from "react";
import logo from '../Navbar/logo_composto_mudanca-8.png'
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = ()=> {

    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="Navbar">
            <span className="nav-logo">
                <Link to="/"><img className="logo" src={logo}/>
                </Link> <span id='titulo'>Composto de Mudança</span>
            </span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <Link to={"/about"}>Quem Somos </Link>

                <Link to={"/signinaluno"}>Iniciar Sessão</Link>
                <Link to={"/signupaluno"}>Registar</Link>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar
