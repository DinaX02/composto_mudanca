import React from "react";
import "./Quiz.css"
import { Link } from "react-router-dom";

const Quiz2geral = () => {



    return (
      <div className="fundojezzzq1">

      <div id="divstartquiz" className="quizzStart">
      <div className="btnstartq1div">

      <Link to={"/paginaPerguntaQ2"}><button id="startbotao" class="buttonStartQUIZ espacotopBotao2quizz">Começar Quiz</button></Link>
      </div>
  </div>
</div>

    );
  };
  
  export default Quiz2geral;
