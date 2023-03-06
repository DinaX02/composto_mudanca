import React, {useEffect, useState} from 'react';
import {auth} from '../../firebase';
import '../Navbar/Navbar.css';
import {onAuthStateChanged, signOut} from "firebase/auth";

const AuthDetails = () => {
    const [authUser, setAuthUser] =useState(null);
    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user)=> {
            if (user){
                setAuthUser(user)
            } else{
                setAuthUser(null);
            }
        });
        return()=>{
            listen();
        }
    }, []);
    const userSignOut = () => {
        signOut(auth).then(()=>{
            console.log('sign out was successful')
        }).catch(error => console.log(error))
    }
    return(
        <div>{authUser ? <> <p>{``}</p>
            <button className='btn_sign_out_border' onClick={userSignOut}><a className='ajustee_btn' href='/'>Sign Out</a></button>
        </> : <p className='btn_sign_out_border'> Sign Out </p>}</div>
    )

}

export default AuthDetails