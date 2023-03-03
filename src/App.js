import "./App.css";
import { useState } from "react";
import About from "./paginas/About";
import SignUp from "./paginas/SignUp";
import SignUpAluno from "./paginas/SignUp_Aluno";
import SignInAluno from "./paginas/SignIn_Aluno";
import Tutorial from "./paginas/Tutorial";
import Homepage from "./paginas/Homepage";
import Feed from "./paginas/Feed";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Tracker from "./paginas/Tracker";
import Mapp from "./paginas/Testemap";
import localizacao from "./paginas/localizacao.json";
import "mapbox-gl/dist/mapbox-gl.css";
import LearnMore from "./paginas/Quiz/LearMore";
import Quiz1 from "./paginas/Quiz/PaginaIncialQuizGeral";
import Quiz2 from "./paginas/Quiz/Quiz2";
import Quiz3 from "./paginas/Quiz/Quiz3";
import SignIn_Professor from "./paginas/SignIn_Professor";
import Perfil from "./paginas/Perfil/Perfil";
import SignUp_Professor from "./paginas/SignUp_Professor";
import Atividade from "./components/Atividade/Atividade";
import PaginaPerguntasQ1 from "./paginas/Quiz/PaginaPerguntasQ1";

import SignUpSumup from "./paginas/SignUpSumup";

import Quiz2geral from "./paginas/Quiz/PaginaIncialQuizGeral2";
import PaginaPerguntasQ2 from "./paginas/Quiz/PaginaPerguntasQ2";
import PaginaPerguntasQ3 from "./paginas/Quiz/PaginaPerguntasQ3";
import Valuecidade from "./paginas/valuecidademapa";


const localizacaoEscolas = localizacao;
console.log(localizacaoEscolas.Aveiro);

function App() {
  const [dataBreveD, setDataBreveD] = useState("");
  const [dataSelected, setDataSelected] = useState("");
  const [dataForaSitio, setDataForaSitio] = useState("");
  const [nomeEquipa, setNomeEquipa] = useState("Equipa 1");
  const [usernamenovo, setUsernamenovo] = useState("");
  const [apelido, setApelido] = useState("");
  const [datainput, setDatainput] = useState("13:31");
  const [tempoinput, setTempoinput] = useState("16/01");
  const[localizacaoinput, setLocalizacaoinput]=useState("Por definir");

  return (
    <div className="App">
      <BrowserRouter basename={window.location.pathname || ''}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupprofessor" element={<SignUp_Professor />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="login" element={<SignInAluno />} />
          <Route path="/signupprofessor" element={<SignUp_Professor />} />
          <Route path="/signupaluno" element={<SignUpAluno />} />
          <Route path="/signinaluno" element={<SignInAluno />} />
          <Route path="/signinprofessor" element={<SignIn_Professor />} />

          <Route
            path="/create"
            element={
              <SignUpSumup
                usernamenovo={usernamenovo}
                setUsernamenovo={setUsernamenovo}
                apelido={apelido}
                setApelido={setApelido}
              />
            }
          />

          <Route
            path="/perfil"
            element={
              <Perfil
                dataBreveD={dataBreveD}
                setDataBreveD={setDataBreveD}
                dataSelected={dataSelected}
                setDataSelected={setDataSelected}
                dataForaSitio={dataForaSitio}
                setDataForaSitio={setDataForaSitio}
                nomeEquipa={nomeEquipa}
                setNomeEquipa={setNomeEquipa}
                usernamenovo={usernamenovo}
                setUsernamenovo={setUsernamenovo}
                apelido={apelido}
                setApelido={setApelido}
              />
            }
          />
          <Route
            path="/tracker"
            element={
              <Tracker
                dataBreveD={dataBreveD}
                setDataBreveD={setDataBreveD}
                dataSelected={dataSelected}
                setDataSelected={setDataSelected}
                dataForaSitio={dataForaSitio}
                setDataForaSitio={setDataForaSitio}
                nomeEquipa={nomeEquipa}
                setNomeEquipa={setNomeEquipa}
                datainput={datainput}
                setDatainput={setDatainput}
                tempoinput={tempoinput}
                setTempoinput={setTempoinput}
                localizacaoinput={localizacaoinput}
                setLocalizacaoinput={setLocalizacaoinput}
              />
            }
          />

          <Route path="/tutorial" element={<Tutorial />} />

          <Route
            path="/feed"
            element={
              <Feed
                dataBreveD={dataBreveD}
                setDataBreveD={setDataBreveD}
                dataSelected={dataSelected}
                setDataSelected={setDataSelected}
                dataForaSitio={dataForaSitio}
                setDataForaSitio={setDataForaSitio}
                nomeEquipa={nomeEquipa}
                setNomeEquipa={setNomeEquipa}
                usernamenovo={usernamenovo}
                setUsernamenovo={setUsernamenovo}
                apelido={apelido}
                setApelido={setApelido}
                datainput={datainput}
                setDatainput={setDatainput}
                tempoinput={tempoinput}
                setTempoinput={setTempoinput}
              />
            }
          />

          <Route
            path="/atividade"
            element={
              <Atividade
                dataBreveD={dataBreveD}
                setDataBreveD={setDataBreveD}
                dataSelected={dataSelected}
                setDataSelected={setDataSelected}
                dataForaSitio={dataForaSitio}
                setDataForaSitio={setDataForaSitio}
                nomeEquipa={nomeEquipa}
                setNomeEquipa={setNomeEquipa}
                datainput={datainput}
                setDatainput={setDatainput}
                tempoinput={tempoinput}
                setTempoinput={setTempoinput}
              />
            }
          />

          <Route path="/location" element={<Mapp />} />

          <Route path="/learnmore" element={<LearnMore />} />

          <Route path="/quiz1" element={<Quiz1 />} />
          <Route path="/quiz2" element={<Quiz2 />} />
          <Route path="/quiz3" element={<Quiz3 />} />

          <Route path="/paginaPerguntaQ1" element={<PaginaPerguntasQ1 />} />

          <Route path="/quiz2geral" element={<Quiz2geral />} />
          <Route path="/paginaPerguntaQ2" element={<PaginaPerguntasQ2 />} />
          <Route path="/paginaPerguntaQ3" element={<PaginaPerguntasQ3 />} />

          <Route path="/mapalocalizacao" element={<Valuecidade 
          localizacaoinput={localizacaoinput}
          setLocalizacaoinput={setLocalizacaoinput}
          />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
