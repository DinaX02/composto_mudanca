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
          <div className='fundoVerde'>
            <div className='headerAbout'>
              <h5 className='titleAbout'> "Todo o mundo é composto de mudança"</h5>
              <h6 className='subtitleAbout'>Luís de Camões</h6>
              <img className='fotoAbout' src={require('./v991-au-009-a.jpg')} width="50%"/>
            </div>
          </div>
          <br/> <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <div className='headerAbout'>
            <br/><br/><br/><br/><br/><br/>
            <div className="sectionajuste ">
              <div className='flexyRow'>

                <h1 className="tituloAbout">
                  O que é o Composto de Mudança?
                </h1>

                <h5 className=' colorGreen lighter'> Uma aplicação para rastrear e gerir a atividade de uma comunidade
                  pedagógica que se aventura pela compostagem comunitária.</h5>
              </div>

              <img className='fotoAbout' src={require('./pexels-katerina-holmes-5905510.jpg')} width="50%"/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

          </div>

          <div className="Headerfundo">


            <div className="paragrafowidth ">
              <div className="sectionajuste infos">
                <img className="imgabout" src={require("./foto1.jpg")} width="50%"/>
                <div className='flexyRow'>
                  <h1 className="h1first h1about margin">
                    Porquê criar este projeto?
                  </h1>

                  <p className="textoclean">
                    Compostagem Comunitária é um processo que envolve muitos
                    stakeholders e por isso pode implicar vários factores para que
                    corra bem.

                  </p>
                </div>
              </div>

              <div className="sectionajuste infos">
                <img className="imgabout" src={require("./foto2.jpg")} width="50%"/>
                <div className='flexyRow'>
                  <h1 className="h1first h1about margin">
                    As origens
                  </h1>
                  <p className="espacofooterabout textoclean">
                    {" "}
                    Este projeto nasceu de um concurso de medidas sustentáveis
                    organizado pelo projeto Mobi Green da Generation Earth. Os projetos vencedores foram alunos de
                    secundário da
                    cidade de Chaves que desenvolveram um projeto de compostagem
                    comunitária em duas escolas secundárias da António Granjo e
                    Fernão de Magalhães.
                  </p>
                  <a href='https://www.altotamegaemrevista.pt/news/5352' target='_blank'>
                    <button className='btnHsignup alignLeft'>Ler mais</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="spacer layerHeader"></div>
        </div>
        <h1 className="h3about h1about"></h1>
        <br/>
        <br/>

        <h1 className="h3about">Criadores:</h1>

        <div className="textoclean containerrrdiv criadores">

          <div className="creators">
            <div className="flexydiv">
              <div className='flexyRow'>
                <p className='alignRight'>
                  <a href="https://github.com/DinaX02" target="_blank">
                    Dinis Antunes
                  </a>
                </p>
                <p className="descricaoCriadores alignRight"> [Inserir frase descritora]Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p></div>
              <button>
                <img className="imgaboutuscreadores" src={require("./dinis.png")}/>
              </button>
            </div>

          </div>

          <div className="creators">
            <div className="flexydiv">

              <button>
                <img className="imgaboutuscreadores" src={require("./sofia.png")}/>
              </button>
              <div className='flexyRow'>
                <p className='alignLeft'>
                  <a href="https://github.com/sbvog" target="_blank">
                    Sofia Bermudez
                  </a>
                </p>
                <p className="descricaoCriadores alignLeft">
                  [Inserir frase descritora] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p></div>
            </div>

          </div>

          <div></div>
        </div>
        <br/>
        <br/>

        <br/>
        <br/>
        <Footer/>
      </div>
    </div>
  );
};

export default About;
