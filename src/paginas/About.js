import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../components/Header/Header.css";
import "./SignUp_Aluno.css"
import Momentos from "../components/Carousel/Carousel";

const About = () => {
    return (
        <div>
            <div className="about">
                <Navbar/>
                <div>
                    <div className='fundoVerde'>
                        <div className='flexyRow'>
                            <h5 className='titleAbout'> "Todo o mundo é composto de mudança"</h5>
                            <h6 className='subtitleAbout'>Luís de Camões</h6></div>
                        <img className='fotoAbout ' src={require('./v991-au-009-a.jpg')} width="50%"/>
                    </div>


                    <div className='headerAbout'>
                        <br/><br/><br/><br/><br/><br/>
                        <div className="trueRow ">
                            <div className='flexyRow'>

                                <h1 className="tituloAbout">
                                    O que é o Composto de Mudança?
                                </h1>

                                <h5 className=' colorGreen lighter'> Uma aplicação para rastrear e gerir a atividade de
                                    uma comunidade
                                    pedagógica que se aventure em compostagem comunitária.</h5>
                            </div>

                            <img className='fotoAbout paddingStyle3'
                                 src={require('./pexels-katerina-holmes-5905510.jpg')} width="50%"/>
                        </div>

                        <h1 className='alignLeft marginStyle2'>Origens</h1>  <p
                        className="  colorGreen paddingStyle2  paragrafowidth">
                        {" "}
                        Este projeto nasceu de um concurso de medidas sustentáveis
                        organizado pelo projeto Mobi Green da Generation Earth. Os projetos vencedores foram alunos de
                        secundário da
                        cidade de Chaves que desenvolveram um projeto de compostagem
                        comunitária em duas escolas secundárias da António Granjo e
                        Fernão de Magalhães.
                    </p>
                        <Momentos/>


                        <div className='flexyRow'>


                            <a href='https://www.altotamegaemrevista.pt/news/5352' target='_blank'>

                                <button className='btnHsignup alignCenter butaum '>Ler mais</button>
                            </a>

                        </div>


                    </div>


                    <div className='estatisticaProblem'>
                        <h1 className="h1first  alignCenter padding margin pt-2">
                            Porquê compostagem comunitária? </h1>
                        <div className='flexyRow'>


                            <div id="container">
                                <img id='round1' width='300em' height='300em' src={require('./round1.png')}
                                     className='alignCenter'/>
                                <p className='lighter'> dos Resíduos Urbanos em Portugal foram parar ao aterro</p>
                                <img id='round2' width='300em' height='300em' src={require('./round2.png')}
                                     className='alignCenter'/>
                                <p className=' lighter'>dos Resíduos Urbanos produzidos em Portugal são orgânicos</p>
                                <p className=' lighter'><a className='pt-3em'
                                                           href='https://apambiente.pt/residuos/dados-sobre-residuos-urbanos'
                                                           target='_blank'>Fonte: APA (2021)</a></p>
                            </div>
                            <br/>
                            <br/><br/><br/><br/>
                        </div>
                    </div>
                </div>
                <div className='criadores'>

                    <h1 className="h3about paddingStyle2">Criadores:</h1>

                    <div className="textoclean containerrrdiv ">

                        <div className="creators">
                            <div className="flexydiv">
                                <div className='flexyRow'>
                                    <p className='alignRight corbranca'>
                                        <a href="https://github.com/DinaX02" target="_blank">
                                            Dinis Antunes
                                        </a>
                                    </p>
                                    <p className="descricaoCriadores alignRight corbranca">
                                        Motivado a procurar as melhores solução de UX. <br/> Aluno Finalista de MTC</p>
                                </div>
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
                                    <p className='alignLeft corbranca'>
                                        <a href="https://github.com/sbvog" target="_blank">
                                            Sofia Bermudez
                                        </a>
                                    </p>
                                    <p className="descricaoCriadores alignLeft corbranca">
                                        Procurando soluções para o mundo através do código. <br/> Aluna finalista de
                                        MTC.
                                    </p></div>
                            </div>

                        </div>

                        <div></div>
                    </div>

                </div>
                <Footer/>
            </div>
        </div>
  );
};

export default About;
