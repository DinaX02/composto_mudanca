import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Quiz.css";

const LearnMore = () => {
  return (
<div>
<Navbar/>
    <div className="fundolearmore">
        
      <div className="HeaderfundoLearnMORE">
        <h1 className="h1first">LearnMore</h1>
        <p className="espacoh3">Teste os seus conhecimentos...</p>
      </div>
      <div className="spacer layerHeader"></div>

<div className="alinhar3quiz">
    
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="imgquiz1 flip-card-front">
          </div>
          <div className="flip-card-back">
            <h1 className="titulosbrancoscartas">Compostagem</h1>
            <br></br><br></br>
            <p>Testa os teus conhecimentos</p>
            <a href='/quiz1'><button className="btnselecionarquizes">Selecionar Tema</button></a>
          </div>
        </div>
      </div>


      <div className="flip-card">
        <div class="flip-card-inner">
          <div class="imgquiz2 flip-card-front">
          </div>
          <div class="flip-card-back">
            <h1 className="titulosbrancoscartas">Compostagem Comunitária</h1>
            <p>Testa os teus conhecimentos</p>
            <a href='/quiz2'><button className="btnselecionarquizes">Selecionar Tema</button></a>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div class="flip-card-inner">
          <div class="imgquiz3 flip-card-front">
          </div>
          <div class="flip-card-back">
            <h1 className="titulosbrancoscartas">Benefícios da Compostagem</h1>
            <p>Testa os teus conhecimentos</p>
            <a href='/quiz3'><button className="btnselecionarquizes">Selecionar Tema</button></a>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default LearnMore;
