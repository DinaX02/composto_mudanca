import React, { useState } from "react";
import logo from '../Navbar/logo_composto_mudanca-8.png'
import './Navbar.css'
const Navbar = ()=> {

    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="Navbar">
            <span className="nav-logo">
                <a href="/"><img className="logo" src={logo}/>
                </a> <span id='titulo'>Composto de Mudança</span>
            </span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/about">Quem Somos</a>

                <a href="/signup">Iniciar Sessão</a>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar
