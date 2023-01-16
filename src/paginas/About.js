import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../components/Header/Header.css";
import "./SignUp_Aluno.css";
const About = () => {
  return (
    <div>
      <div className="about">
        <Navbar />
        <div>
          <div className="Headerfundo">
            <h1 className="h1first h1about margin">
              Porquê criar este projeto?
            </h1>
            <div className="paragrafowidth ">
              <div className="sectionajuste infos">
                <img className="imgabout"src={require("./foto1.jpg")} width="50%" />
                <p className="textoclean">
                  Compostagem Comunitária é um processo que envolve muitos
                  stakeholders e por isso pode implicar vários factores para que
                  corra bem.
                </p>
              </div>

              <div className="sectionajuste infos">
                <img className="imgabout" src={require("./foto2.jpg")} width="50%" />
                <p className="espacofooterabout textoclean">
                  {" "}
                  Este projeto nasceu de um concurso de medidas sustentáveis
                  organizado pelo projeto Mobi Green da Generation Earth no ano
                  de 2020. Os projetos vencedores foram alunos de secundário da
                  cidade de Chaves que desenvolveram um projeto de compostagem
                  comunitária em duas escolas secundárias da António Granjo e
                  Fernão de Magalhães.
                </p>
              </div>
            </div>
          </div>
          <div className="spacer layerHeader"></div>
        </div>
        <h1 className="h3about h1about"></h1>

        <h1 className="h3about">Criadores:</h1>

        <div className="textoclean containerrrdiv criadores">
          <div className="creators">
            <button>
              <img className="imgaboutuscreadores" src={require("./dinis.png")}/>
            </button>
            <p>
              <a href="https://github.com/DinaX02" target="_blank">
                Dinis Antunes
              </a>
            </p>
          </div>

          <div className="creators">
            <button>
              <img className="imgaboutuscreadores" src={require("./sofia.png")}/>
            </button>
            <p>
              <a href="https://github.com/sbvog" target="_blank">
                Sofia Bermudez
              </a>
            </p>
          </div>

          <div></div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;
