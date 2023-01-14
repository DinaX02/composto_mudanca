import React, {useState} from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./SignUp_Aluno.css";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";
import AuthDetails from "../components/auth/AuthDetails";

const SignInProfessor = () => {

    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const signIn = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
            console.log(userCredential);
        })
            .catch((error) => {
                console.log(error);
            });
    }
  return (
    <div className="fundosign">
        <Navbar />

        <form onSubmit={signIn}>
      <h1 className="tituloprincipal">Sign In</h1>
        <div className="textaligninputs divESp">



        <input type="email" id="email" name="email" placeholder="Email..."
        value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <input
          type="password"
          id="passwordAluno"
          name="passwordAluno"
          placeholder="Introduza a sua password..."
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>

      <div className="textaligninputs">
          <button className="btnHsignup btnsignup" type="submit">
          Sign In
          </button>

              <button className="btnHsignup btnsignup" type="text">
                  <a href="/feed"> Entra no teu feed </a>
              </button>

        </div>
    </form>
    </div>
  );
};

export default SignInProfessor;
