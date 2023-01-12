import React, {useEffect, useState} from 'react';
import {auth} from '../../firebase';
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
        <div>{authUser ? <><p>{`Signed in as ${authUser.email}`}</p>
           <button onClick={userSignOut}> <a href='/'>Sign Out</a> </button></>  : <p>Signed out </p>}</div>
    )

}

export default AuthDetails