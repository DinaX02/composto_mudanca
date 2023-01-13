import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
//import Header from './components/Header/Header';
//import ConteudoHp from './components/ConteudoHp/ConteudoHp';
//import Footer from './components/Footer/Footer';
import About from "./paginas/About";
import SignUp from "./paginas/SignUp";
import SignUpAluno from "./paginas/SignUp_Aluno";
import SignInAluno from "./paginas/SignIn_Aluno";
import Tutorial from "./paginas/Tutorial";
import Homepage from "./paginas/Homepage";
import Location from "./components/teste/location";
import Service from "./paginas/Service";
import Feed from "./paginas/Feed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tracker from "./paginas/Tracker";
import Mapp from "./paginas/Testemap";
import localizacao from "./paginas/localizacao.json";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import LearnMore from "./paginas/Quiz/LearMore";
import Quiz1 from "./paginas/Quiz/PaginaIncialQuizGeral";
import Quiz2 from "./paginas/Quiz/Quiz2";
import Quiz3 from "./paginas/Quiz/Quiz3";
//const localizacaoEscolas = localizacao;
//console.log(localizacaoEscolas.Aveiro);
import AuthDetails from "./components/auth/AuthDetails";
import SignIn_Professor from "./paginas/SignIn_Professor";
import Perfil from "./components/Perfil/Perfil";
import SignUp_Professor from "./paginas/SignUp_Professor";
import Atividade from "./components/Atividade/Atividade";
import PaginaPerguntasQ1 from "./paginas/Quiz/PaginaPerguntasQ1";
//const localizacaoEscolas = localizacao;
//console.log(localizacaoEscolas.Aveiro);

import SignUpSumup from "./paginas/SignUpSumup";
import Signin from "./components/auth/Signin";
const localizacaoEscolas = localizacao;
console.log(localizacaoEscolas.Aveiro);

function App() {
  const [username, setUsername] = useState("");
  const [dataBreveD, setDataBreveD] = useState("");
  const [dataSelected, setDataSelected] = useState("");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupprofessor" element={<SignUp_Professor />} />
          <Route path="/signupaluno" element={<SignUpAluno />} />
          <Route path="/signinaluno" element={<SignInAluno />} />
          <Route path="/signinprofessor" element={<SignIn_Professor />} />

          <Route
            path="/tracker"
            element={
              <Tracker
                dataBreveD={dataBreveD}
                setDataBreveD={setDataBreveD}
                dataSelected={dataSelected}
                setDataSelected={setDataSelected}
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
              />
            }
          />

          <Route path="/location" element={<Mapp />} />

          <Route path="/learnmore" element={<LearnMore />} />

          <Route
            path="/quiz1"
            element={<Quiz1 username={username} setUsername={setUsername} />}
          />
          <Route
            path="/quiz2"
            element={<Quiz2 username={username} setUsername={setUsername} />}
          />
          <Route path="/quiz3" element={<Quiz3 />} />

          <Route path="/paginaPerguntaQ1" element={<PaginaPerguntasQ1 />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
