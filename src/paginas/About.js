import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../components/Header/Header.css";
import "./SignUp_Aluno.css";
const About = () => {
  return (
    <div>
      <div className="about">
      <Navbar/>
      <div>
    <div className="Headerfundo">
      <h1 className="h1first h1about">Porquê criar este projeto?</h1>
      </div>
      <div className="spacer layerHeader"></div>
    </div>
    <h1 className="h3about h1about"></h1>
        <div className="paragrafowidth ">
<div className='sectionajuste infos'>
    <img src={require('./foto1.jpg')} width='680vh'/><p>
    Compostagem Comunitária é um processo que envolve muitos stakeholders e por isso pode implicar vários factores para que corra bem.</p>
</div>


            <div className='sectionajuste infos'><img src={require('./foto2.jpg')} width='680vh'/>
                <p className="espacofooterabout textoclean"> Este projeto nasceu de um concurso de medidas sustentáveis organizado pelo projeto Mobi Green da Generation Earth no ano de 2020.
                    Os projetos vencedores foram alunos de secundário da cidade de Chaves que desenvolveram um projeto de compostagem comunitária em duas escolas secundárias da António Granjo e Fernão de Magalhães.



                </p></div>



     
        </div>

        <h1 className="h3about">Criadores:</h1>

        <div className="textoclean containerrrdiv criadores">

            <div className='creators'>  <img src={require('./dinis.png')} /><p>- Dinis Antunes</p></div>


            <div className='creators'>  <img src={require('./sofia.jpg')} width='680vh'/> <p>- Sofia Bermudez</p></div>


        <div>
        </div>
        </div>
       
        <Footer/>
        </div>
    </div>
  );
};

export default About;