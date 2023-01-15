import React from "react";
import "./Quiz.css"
import { Link } from "react-router-dom";

const Quiz1 = () => {



    return (
      <div className="fundojezzzq1">

      <div id="divstartquiz" className="quizzStart">
      <div className="btnstartq1div">

      <Link to={"/paginaPerguntaQ1"}><button id="startbotao" class="buttonStartQUIZ espacotopBotao2quizz">Começar Quiz</button></Link>
      </div>
  </div>
</div>

    );
  };
  
  export default Quiz1;
