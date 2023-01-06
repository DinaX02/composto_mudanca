import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import ConteudoHp from "../components/ConteudoHp/ConteudoHp";
import Footer from "../components/Footer/Footer";
//import localizacao from "../paginas/localizacao.json";

//const localizacaoEscolas = localizacao;
//console.log(localizacaoEscolas[0]);

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <ConteudoHp/>
        <Footer/>
    </div>
  );
};

export default Homepage;