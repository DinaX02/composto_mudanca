import React from "react";
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import './SignUp.css';
import Footer from "../components/Footer/Footer";

const SignUp = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <section className="spacer_end">
        <h1 className="titulo espacoinic">Como Professor:</h1>
        <p className="textalign espacofim">
          Como Professor gere as tuas equipas, atribui turnos, papéis aos alunos e acede a recursos de aprendizagem sobre  a compostagem.
        </p>
        <h1 className="titulo">Como Aluno:</h1>
        <p className="textalign espacofim">
          Participa na tua equipa de compostagem, coordenando equipas, realizando funções e ainda utilizar o Tracker para o teu compostor.
        </p>
        </section>
        <Footer/>
    </div>
  );
};

export default SignUp;
