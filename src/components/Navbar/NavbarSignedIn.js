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

                <div className='imgMenu avatar'>
                <a href='/perfil'> <img src='https://avatars.dicebear.com/api/big-smile/9.svg'/> </a>
                </div>


            <div className={`nav-items ${isOpen && "open"}`}>
                <a href=""> <AuthDetails/></a>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=>setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar
