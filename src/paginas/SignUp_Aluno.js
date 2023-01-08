import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./SignUp_Aluno.css";

const SignUpAluno = () => {
  return (
    <div className="fundosign">
      <Navbar />
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

        <input type="text"
               id="email"
               name="email"
               placeholder="Email..." />

        <input
          type="text"
          id="passwordAluno"
          name="passwordAluno"
          placeholder="Password..."
        />
        <div className="divescolhacid">
        <label className="escolahcidade" for="country"><strong>Escolha Cidade</strong></label>
        </div>
        <button className="btnHsignup btnsignup localizacaobtn" type="button">Escolha a sua localização</button>
      </div>
      <div className="textaligninputs">
        <a href="/feed"><button className="btnHsignup btnsignup" type="button">
          Regista-te como Aluno
        </button></a>
      </div>

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
