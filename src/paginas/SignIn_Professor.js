import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./SignUp_Aluno.css";

const SignInProfessor = () => {
  return (
    <div className="fundosign">
      <Navbar />
      <h1 className="tituloprincipal">Sign In</h1>

      <div className="textaligninputs divESp">

        <input type="text" id="email" name="email" placeholder="Email..." />

        <input
          type="text"
          id="passwordAluno"
          name="passwordAluno"
          placeholder="Password..."
        />
      </div>
      <div className="textaligninputs">
        <button className="btnHsignup btnsignup" type="button">
          Sign In
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default SignInProfessor;
