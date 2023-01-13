import React, { useState } from "react";
import "./Quiz.css";
import questions1 from "./questions";
//import quiz1img1 from "../Quiz/quiz1_img2.jpg";
import { Link } from "react-router-dom";

const PaginaPerguntasQ1 = () => {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setcurrentQuestion] = useState(0);

  const alineaSelecionada = (resposta) => {
    console.log(resposta);
    if (resposta) {
      setScore(score + 1);
    }
    //vai passar de pergunta

    if (currentQuestion + 1 < questions1.length) {
      setcurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setcurrentQuestion(0);
    setFinalResults(false);
  };

  return (
    <div className="fundoquiz1">
      <div className="headerquiz">
        <span id="textoquizz" className="h1Quizzz">
          Quiz
        </span>
      </div>

      {/*current score*/}


      {showFinalResults ? (
        /*div resultados finais score...*/

        <div className="final-results">
          <h1 className="divfinalquiz">Parabéns Completaste o quiz!</h1>
          <h2>Acertas-te{score} de {questions1.length} Perguntas</h2>
          <h2>Acertas-te {(score / questions1.length) * 100} % do Quiz!</h2>
          <div className="alinharbtnVoltarLM">
          <button className="btnvoltarraoLearnMore" onClick={() => restartQuiz()}>
            Restart Quiz
          </button>
        <Link to={'/learnmore'}><button className="btnvoltarraoLearnMore">Sair Quiz</button></Link>
      </div>
        </div>

      ) : (
        /*div com perguntas /alineas*/
        <div className="question-card">
            
     

<span><h2>Pergunta {currentQuestion + 1} de {questions1.length}</h2>

<h2 className="espacamentoscore">Score: <span className="backgroundcontrastequiz">{score}</span></h2></span>

          <h1 className="question-text">
            {questions1[currentQuestion].question}
          </h1>
          <div id="imgQuizz" className="text-centerimg">
            <img className="imgQuizz" src={questions1[0].imagem} />
          </div>
          <ul className="listacentrada">
            {questions1[currentQuestion].options.map((alinea) => {
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
        <Link to={'/learnmore'}><button className="btnvoltarraoLearnMore">Voltar</button></Link>
      </div>
        </div>
      )}

    </div>
  );
};

export default PaginaPerguntasQ1;
