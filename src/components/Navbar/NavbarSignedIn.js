import React, {useState} from "react";
import './NavbarSignedIn.css'
import AuthDetails from "../auth/AuthDetails";
import {Link} from "react-router-dom";

const NavbarSignedIn = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="NavbarSignedIn">

            <div className='avatar imgPerfil'>
                <a href='/perfil'> <img src={`https://avatars.dicebear.com/api/big-smile/9.svg`}/> </a>
            </div>


            <div className={`nav-items ${isOpen && "open"} ola`}>
                <Link to="/"> <AuthDetails/></Link>
            </div>

        </div>
    )
}

export default NavbarSignedIn
