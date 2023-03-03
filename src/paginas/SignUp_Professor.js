import React, {useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";
import "./SignUp_Aluno.css";
import {Link} from "react-router-dom";
import Footer from "../components/Footer/Footer";


const SignUpProfessor = ({
  username1,setUsername1,
}) => {

    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const signUp = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
            console.log(userCredential);
        })
            .catch((error) => {
                console.log(error);
            });
    }

    const [buttonText, setButtonText] = useState('Regista-te como Professor');

    function handleClick() {
        setButtonText('Registado');
    }

    return (
    <div className="fundosign">
        <Navbar />
        <form onSubmit={signUp}>

      <h1 className="tituloprincipal">Sign Up</h1>

      <p className="textaligninputs corbranca">
        Já tens conta?
        <strong>
          <Link className="corbranca" to="/signinprofessor">
            Inicie sessão aqui
          </Link>
        </strong>
      </p>
      <div className="textaligninputs divESp">

<p></p>

        <input  type="email"
               id="email"
               name="email"
               placeholder="Introduza o seu e-mail..."
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
        />
<p></p>

        <input
          type="password"

          name="passwordProf"
          placeholder="Introduza a sua palavra-passe..."
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      
          <div className="textaligninputs">
          <button className="btnHsignup btnsignup" type="submit" onClick={handleClick}>
                  {buttonText}
              </button><br/>
              <Link to={'/create'}><button className="btnHsignup btnsignup" type="text">
                 Próximo
              </button></Link>
          </div>



      </div>

</form>
<Footer/>
    </div>
  );
};

export default SignUpProfessor;

