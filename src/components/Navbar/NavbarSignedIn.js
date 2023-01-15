import React, {useState} from "react";
import './NavbarSignedIn.css'
import AuthDetails from "../auth/AuthDetails";


const NavbarSignedIn = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="NavbarSignedIn">

            <div className='imgMenu avatar'>
                <a href='/perfil'> <img src='https://avatars.dicebear.com/api/big-smile/9.svg'/> </a>
            </div>


            <div className={`nav-items ${isOpen && "open"} ola`}>
                <a href=""> <AuthDetails/></a>
            </div>

        </div>
    )
}

export default NavbarSignedIn
