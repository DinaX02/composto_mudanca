import React, { useState } from "react";
import "./Quiz.css";
import questions3 from "./questions3";
//import quiz1img1 from "../Quiz/quiz1_img2.jpg";
import { Link } from "react-router-dom";

const PaginaPerguntasQ3 = () => {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [currentImg, setcurrentImg] = useState(0);
  const alineaSelecionada = (resposta) => {
    console.log(resposta);
    if (resposta) {
      setScore(score + 1);
    }
    //vai passar de pergunta

    if (currentQuestion + 1 < questions3.length) {
      setcurrentQuestion(currentQuestion + 1);
      setcurrentImg(currentImg + 1);
    } else {
      setFinalResults(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setcurrentQuestion(0);
    setcurrentImg(0);
    setFinalResults(false);
  };

  return (
    <div className="fundoquiz1">
      <div className="headerquiz">
        <span id="textoquizz" className="h1Quizzz">
          Quizz
        </span>
      </div>

      {/*current score*/}


      {showFinalResults ? (
        /*div resultados finais score...*/

        <div className="final-results">
          <h1 className="divfinalquiz">Parabéns Completaste o quizz!</h1>
          <h2 className="finaldivcentro">Acertaste {score} de {questions3.length} Perguntas</h2>
          <h2 className="finaldivcentro">Resultado: {(score / questions3.length) * 100} % !</h2>
          <div className="alinharbtnVoltarLM">
          <button className="btnvoltarraoLearnMore" onClick={() => restartQuiz()}>
            Restart Quizz
          </button>
        <Link to={'/feed'}><button className="btnvoltarraoLearnMore">Sair Quizz</button></Link>
      </div>
        </div>

      ) : (
        /*div com perguntas /alineas*/
        <div className="question-card">
            
     

<span><h2>Pergunta {currentQuestion + 1} de {questions3.length}</h2>

<h2 className="espacamentoscore">Score: <span className="backgroundcontrastequiz">{score}</span></h2></span>

          <h1 className="question-text">
            {questions3[currentQuestion].question}
          </h1>
          <div id="imgQuizz" className="text-centerimg">
            <img className="imgQuizz" src={questions3[currentImg].imagem} />
          </div>
          <ul className="listacentrada">
            {questions3[currentQuestion].options.map((alinea) => {
              return (

                


                <li
                  className="largurali formatacaoLi"
                  onClick={() => alineaSelecionada(alinea.resposta)}
                  key={alinea.alineaKey}
                >
                  {alinea.text}
                </li>
              );
            })}
          </ul>
          <div className="alinharbtnVoltarLM">
        <Link to={'/feed'}><button className="btnvoltarraoLearnMore">Voltar</button></Link>
      </div>
        </div>
      )}

    </div>
  );
};

export default PaginaPerguntasQ3;
