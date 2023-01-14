import React, {useState} from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";
import "./SignUp_Aluno.css";
import AuthDetails from "../components/auth/AuthDetails";
import {Link} from "react-router-dom";



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
          <a className="corbranca" href="/signinprofessor">
            Inicie sessão aqui
          </a>
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
        <div className="divescolhacid">
        <label className="escolahcidade" >Escolha Cidade</label>
        </div>
          <button className="btnHsignup btnsignup localizacaobtn" type="button"><a href='/location'>Escolha a sua localização </a></button>
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
    </div>
  );
};

export default SignUpProfessor;

//<select id="cidade" name="cidade" placeholder="Escolha cidade">
//<option value="australia">Aveiro</option>
//<option value="canada">Chaves</option>
//<option value="usa">Peniche</option>
//</select>