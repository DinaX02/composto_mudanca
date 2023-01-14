import React from "react";
import "./Quiz.css"
import { useState } from "react";
import { Link } from "react-router-dom";

const Quiz3 = () => {

    console.log()
    return (
<div className="fundojezzzq1">

      <div id="divstartquiz" className="quizzStart">
      <div className="btnstartq1div">

      <Link to={"/paginaPerguntaQ3"}><button id="startbotao" class="buttonStartQUIZ espacotopBotao2quizz">Começar Quiz</button></Link>
      </div>
  </div>
</div>

    );
  };
  
  export default Quiz3;