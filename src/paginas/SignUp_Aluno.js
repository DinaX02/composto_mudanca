import React, {useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";
import "./SignUp_Aluno.css";
import {Link} from "react-router-dom";

const SignUpAluno = () => {

    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential);
        })
            .catch((error) => {
                console.log(error);
            });
    }
    const [buttonText, setButtonText] = useState('Regista-te como aluno');

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
          <a className="corbranca" href="/signinaluno">
            Inicie sessão aqui
          </a>
        </strong>
      </p>
      <div className="textaligninputs divESp">


        <input type="email" id="email" name="email" placeholder="Email..."  value={email}
               onChange={(e)=>setEmail(e.target.value)}/>

        <input
          type="password"
          id="passwordAluno"
          name="passwordAluno"
          placeholder="Password..."
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        
      </div>
      <div className="textaligninputs">
          <button className="btnHsignup btnsignup" type="submit" onClick={handleClick}>
            {buttonText}
        </button><br/>
          <Link to={'/create'}><button className="btnHsignup btnsignup" type="text">
              Próximo
          </button></Link>


      </div>
        </form>
    </div>
  );
};

export default SignUpAluno;

//<div>
//<button className="btnHsignup btnsignup localizacaobtn" type="button">Escolha a sua localização</button>
//</div>

//<select id="cidade" name="cidade" placeholder="Escolha cidade">
//<option value="australia">Aveiro</option>
//<option value="canada">Chaves</option>
//<option value="usa">Peniche</option>
//</select>
