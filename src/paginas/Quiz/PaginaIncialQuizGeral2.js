import React from "react";
import "./Quiz.css"
import { useState } from "react";
import { Link } from "react-router-dom";

const Quiz2geral = ({
  username,setUsername,
}) => {



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

  //<input
    //    type="text"
      //  placeholder="Username"
        //className="username_input"
        //value={username}
        //onChange={(e) => setUsername(e.target.value)}
        ///>

        //<div>
      //  <Link to={"/quiz2"}><button>
       //   quiz2
       // </button></Link>
     // </div>

     //<div class="DivquizzStartBotoes">   
     //<p>100 pontos por cada reposta certa</p>
     //<p>-50 pontos por cada reposta errada</p>
     //<p>Após selecionar uma opção não pode voltar atrás</p>  
     //</div>