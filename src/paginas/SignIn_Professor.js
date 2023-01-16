import React, {useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import "./SignUp_Aluno.css";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";
import {Link} from "react-router-dom";
import Footer from "../components/Footer/Footer";

const SignInProfessor = () => {

    const [email,setEmail] =useState('');
    const [password, setPassword] = useState('');
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential);
        })
            .catch((error) => {
                console.log(error);
            });
    }

    const [buttonText, setButtonText] = useState('Sign in como Professor');

    function handleClick() {
        setButtonText('Signed in');
    }

    return (
        <div className="fundosign">
            <Navbar/>

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
                    <button className="btnHsignup btnsignup" type="submit" onClick={handleClick}>
                        {buttonText}
                    </button>

                    <br/>
                    <Link to={'/feed'}>
                        <button className="btnHsignup btnsignup" type="text">
                            Entrar no Feed

                        </button>
                    </Link>

                </div>
    </form>
<Footer/>
    </div>
  );
};

export default SignInProfessor;
