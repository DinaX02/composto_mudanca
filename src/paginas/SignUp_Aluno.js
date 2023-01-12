import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./SignUp_Aluno.css";

const SignUpAluno = () => {

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
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Primeiro Nome..."
        />

        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Apelido..."
        />

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
        <div className="divescolhacid">
        <label className="escolahcidade" ><strong>Escolha Cidade</strong></label>
        </div>
        <button className="btnHsignup btnsignup localizacaobtn" type="button"><a href='/location'>Escolha a sua localização </a></button>
      </div>
      <div className="textaligninputs">
        <button className="btnHsignup btnsignup" type="submit">
          Regista-te como Aluno
        </button>

          <button className="btnHsignup btnsignup" type={"text"}>
              <a href="/feed"> Entrar no feed</a>
          </button>
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
