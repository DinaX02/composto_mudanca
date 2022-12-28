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
      <h1 className="h1first h1about">About Us</h1>
      </div>
      <div className="spacer layerHeader"></div>
    </div>
    <h1 className="h3about h1about">Porquê criar este projeto?</h1>
        <div className="paragrafowidth containerrrdiv">
       
        <p className="espacofooterabout textoclean"> Perferendis, eum. Necessitatibus cum illo, quos iste, pariatur ipsa
          eveniet beatae quisquam ullam aut dolore doloremque odit minus fuga
          esse suscipit maxime dolores? Placeat, maxime quas labore facere
          molestias nam Perferendis, eum. Necessitatibus cum illo, quos iste, pariatur ipsa
          eveniet beatae quisquam ullam aut dolore doloremque odit minus fuga
          esse Placeat, maxime quas labore facere
          molestias nam Perferendis, eum. Necessitatibus cum illo, quos iste, pariatur ipsa
          eveniet beatae quisquam ullam aut dolore doloremque odit minus fuga
          ess.
         .</p>
     
        </div>

        <h1 className="h3about">Criadores:</h1>

        <div className="textoclean containerrrdiv criadores">

        <p>- Dinis Antunes</p>
        <p>- Sofia Bermudez</p>
        <div>
        </div>
        </div>
       
        <Footer/>
        </div>
    </div>
  );
};

export default About;