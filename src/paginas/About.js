import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../components/Header/Header.css";
import "./SignUp_Aluno.css";
import Momentos from "../components/Carousel/Carousel";

const About = () => {
  return (
    <div>
      <div className="about">
        <Navbar />
        <div>
          <div className="fundoVerde">
            <div className="flexyRow">
              <h5 className="titleAbout">
                {" "}
                "Todo o mundo é composto de mudança"
              </h5>
              <h6 className="subtitleAbout">Luís de Camões</h6>
            </div>
            <img
              className="fotoAbout "
              src={require("./v991-au-009-a.jpg")}
              width="50%"
            />
          </div>

          <div className="headerAbout">
            <br />
            <br />
            <br />
            <br />
            <div className="trueRow ">
              <div className="flexyRow">
                <div>
                  <h1 className="tituloAbout">
                    O que é o Composto de Mudança?
                  </h1>

                  <h5 className=" colorGreen lighter">
                    {" "}
                    Uma aplicação para rastrear e gerir a atividade de uma
                    comunidade pedagógica que se aventure em compostagem
                    comunitária.
                  </h5>
                </div>
              </div>

              <img
                className="fotoAbout paddingStyle3 img2aboutt"
                src={require("./pexels-katerina-holmes-5905510.jpg")}
                width="50%"
              />
            </div>
            <div className="linha_espacinho">
              <hr className="linha_abouttt"></hr>
            </div>
            <div className="origens_div">
              <h1 className="alinhar_origens">Origens</h1>{" "}
              <p className="  colorGreen paddingStyle2  paragrafowidth">
                {" "}
                Este projeto nasceu de um concurso de medidas sustentáveis
                organizado pelo projeto Mobi Green da Generation Earth. Os
                projetos vencedores foram alunos de secundário da cidade de
                Chaves que desenvolveram um projeto de compostagem comunitária
                em duas escolas secundárias da António Granjo e Fernão de
                Magalhães.
                <a
                  href="https://www.altotamegaemrevista.pt/news/5352"
                  target="_blank"
                >
                  <p className="ler_mais_origens">
                    Ler mais
                    <span>
                      <img
                        className="seeta_ler_maisss"
                        src={require("./seta_ler_mais.png")}
                      />
                    </span>
                  </p>
                </a>
              </p>
            </div>
            <Momentos />
          </div>
        </div>

        <div className="grafico_geral">
          <h1 className="ajustarTituloCompostagem">
            Porquê fazer compostagem comunitária ?
          </h1>
          <div className="div_graficoss">
            <div className="alinhar_grf">
              <img
                className="img_graficos"
                id="round1"
                width="300em"
                height="300em"
                src={require("./round1.png")}
              />

              <p className="texto_graficos">
                {" "}
                dos Resíduos Urbanos em Portugal foram parar ao aterro
              </p>
            </div>

            <div className="alinhar_grf2">
              <img
                className="img_graficos"
                id="round2"
                width="300em"
                height="300em"
                src={require("./round2.png")}
              />

              <p className="texto_graficos">
                {" "}
                dos Resíduos Urbanos produzidos em Portugal são orgânicos
              </p>
            </div>
          </div>
          <div className="espaco_div_link">
            <p className="texto_graficos">
              <a
                className=" link_grafico"
                href="https://apambiente.pt/residuos/dados-sobre-residuos-urbanos"
                target="_blank"
              >
                Fonte: APA (2021)
              </a>
            </p>
          </div>
        </div>

        <div className="criadores cor_descricao_verde">
          <div>
            <h1 className="ajustarTituloCompostagem espaco_Criadores">
              Criadores
            </h1>
            <div className="div_graficoss">
              <div className="alinhar_grf">
                <img
                  className="img_graficos imgBorder_about"
                  id="round1"
                  width="200em"
                  height="200em"
                  src={require("./dinis.png")}
                />
                <p className ="cor_descricao_verde">
                  <a className="cor_descricao_verde" href="https://github.com/DinaX02" target="_blank">
                    Dinis Antunes
                  </a>
                </p>
                <p className="texto_graficos descricao_aboutssss">
                  {" "}
                  Motivado a procurar as melhores solução de UX
                </p>
              </div>

              <div className="alinhar_grf2">
                <img
                  className="img_graficos imgBorder_about"
                  id="round2"
                  width="200em"
                  height="200em"
                  src={require("./sofia.png")}
                />

                <p className="texto_sofia_new cor_descricao_verde">
                  <a className="cor_descricao_verde" href="https://github.com/sbvog" target="_blank">
                    Sofia Bermudez
                  </a>
                </p>
                <p className="texto_graficos descricao_aboutssss">
                  {" "}
                  Procurando soluções para o mundo através do código
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
