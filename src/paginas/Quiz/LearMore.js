import React from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";

const LearnMore = () => {
  return (
<div>
    <br/>
    <div className='CompAtividade'>
        <h1 className="h1first">Learn More</h1>
        <p className="espacoh3">Teste os seus conhecimentos...</p>
    </div>


    <div className="alinhar3quiz">

        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="imgquiz1 flip-card-front">
                </div>
                <div className="flip-card-back">
                    <h1 className="titulosbrancoscartas">Compostagem</h1>
            <br></br><br></br>
            <p>Testa os teus conhecimentos</p>
            <Link to={'/quiz1'}><button className="btnselecionarquizes">Selecionar Tema</button></Link>
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
            <Link to={'/quiz2geral'}><button className="btnselecionarquizes">Selecionar Tema</button></Link>
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
            <Link to={'/quiz3'}><button className="btnselecionarquizes">Selecionar Tema</button></Link>
          </div>
        </div>
      </div>
      </div>

</div>
  );
};

export default LearnMore;
