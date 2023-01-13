
import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../components/Header/Header.css";
import "./SignUp_Aluno.css";
const Service = () => {
  return (
    <div>
      <div className="about">
      <Navbar/>
      <div>
    <div className="Headerfundo">
      <h1 className="h1first h1about">O que fazemos</h1>
      </div>
      <div className="spacer layerHeader"></div>
      <h1 className="h3about h1about"></h1>
    </div>
        <div className="paragrafowidth containerrrdiv">
        
        <p className="espacofooterabout  textoclean"> Oferecemos uma aplicação para monitorizar e rastrear a utilização do teu compostor comunitário. Para além disso, esta aplicação visa apoiar comunidades escolares ou pedagógicas que queiram introduzir a compostagem como parte da sua educação ambiental. Com features como gestão de turnos,  gestão de equipas, um Tracker único de compostagem, secção de aprendizagem e ainda componentes de gamificação. </p>
        </div>
        </div>
        <div>
        <Footer/>
        </div>
    </div>
  );
};

export default Service;