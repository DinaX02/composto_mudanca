import React, { useState } from "react";
import "./Tracker.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import Mapp from "./Testemap";
import NavbarSignedIn from "../components/Navbar/NavbarSignedIn";

const Tracker = ({dataBreveD, setDataBreveD,dataSelected, setDataSelected,dataForaSitio, setDataForaSitio, nomeEquipa,setNomeEquipa}) => {

  //console.log(Mapp.getValueCidade)

  //const [dataSelected, setDataSelected] = useState(null);
  //const [dataBreveD, setDataBreveD] = useState(null);
  //const [dataForaSitio, setDataForaSitio] = useState(null);
  const [print, setPrint] = useState(false);

  //function getDataSelected(val2){
    //setDataSelected(val2.target.value);
    //setPrint(false);
    //console.log(dataSelected);
    //console.log(print);
  //}



  //function getDataBrevedescricao(val1){
    //setDataBreveD(val1.target.value);
    //setPrint(false);
   // console.log(dataBreveD);
   // console.log(print);
  //}


 // function getDataForaSitio(val) {
    //setDataForaSitio(val.target.value);
    //setPrint(false);
    //console.log(val.target.value);
    //console.log(dataForaSitio);
    //console.log(print);
  //}

  return (
      <div>
          <NavbarSignedIn/>
          <div>
              <a href="/feed">
                  <button className="voltar"> Voltar</button>
              </a>
          </div>
        <div className="trackeralinharcentro">
          <h1 className="titulostracker">Tracker</h1>
          <div>
            <p className="h7headertracker ptracker">
              Regista a entrada de resíduos no compostor
            </p>
          </div>
          <div className="divimgtrackerxd">
            <img
                className="imgtrackerresponsive"
                src={require("./imgTutorial/Compostor_Tracker.png")}
                alt="compostor"
            />
          </div>
          <div className="trackeralinharcentro">
            <p id="LocationText" className="ptracker">
              Location:<span id="Currentlocation"></span>{" "}
            </p>
            <br></br>
            <br></br>
            <p className="reduzirespacoppp ptracker">
              {" "}
              Não é a tua localização?
              <a className="hiperlitracker" href="/location">
                {" "}
                Muda aqui
              </a>
            </p>
            <br></br>
            <input className="nomeeuipainput"
          type="text"
          name="nomedaequipa"
          placeholder="Nome da Equipa"
          value={ nomeEquipa}
          onChange={(e) => setNomeEquipa(e.target.value)}
        />
            <br></br>
            <div className="brevedescricaotracker">
              <label for="residuos">Escolhe o tipo de resíduos</label>
            </div>
            <br></br>
            <select name="residuos" id="residuos"  onChange={(e) => setDataSelected(e.target.value)}>
              <option value="select">Seleciona uma opção</option>
              <option value="Restos de fruta e legumes crus">Restos de fruta e legumes crus</option>
              <option value="Borras de café e chá">Borras de café e chá</option>
              <option value="Filtros de papel para chafé ou café usados">
                Filtros de papel para chafé ou café usados
              </option>
              <option value="odas, folhas relva e outros resíduos verdes">
                Podas, folhas relva e outros resíduos verdes
              </option>
              <option value="Cascas de ovos limpas">Cascas de ovos limpas</option>
            </select>
            <br></br>
            <div className="brevedescricaotracker">
              <label for="description">
                Coloca uma breve descrição sobre os resíduos:
              </label>
            </div>
            <br></br>

            <input
                id="description"
                name="description"
                type="text"
                value={dataBreveD}
                onChange={(e) => setDataBreveD(e.target.value)}
            />

            <br></br>
            <div className="brevedescricaotracker">
              <label for="description">Vês algo fora do sítio?</label>
            </div>
            <br></br>

            <input
                type="text"
                id="description"
                name="description"
                value={dataForaSitio}
                onChange={(e) => setDataForaSitio(e.target.value)}
          
            />

            <div className="frasesobretutorialTracker">
              <p className="espacosubmeter ptracker">
                Não tens a certeza se podes colocar um tipo de resíduo
                <a className="hiperlitracker" href="/tutorial">
                  {" "}
                  Clique aqui{" "}
                </a>{" "}
                para ver um rápido tutorial
              </p>
            </div>

            <div className="divapresentacaodados">
            <div className="cabetudonalinha">
                <h4 className="encontatitulotarcker">Nome Equipa:{print ? <h4 className="semcordados1">{nomeEquipa}</h4> : null} </h4>
              </div>
              <div className="cabetudonalinha">
                <h4 className="encontatitulotarcker">Tipo de Resíduo:{print ? <h4 className="semcordados1">{dataSelected}</h4> : null} </h4>
              </div>
              <div className="cabetudonalinha">
                <h4 className="encontatitulotarcker">Breve Descrição:{print ? <h4 className="semcordados1">{dataBreveD}</h4> : null} </h4>
              </div>
              <div className="cabetudonalinha">
                <h4 className="encontatitulotarcker">Algo Fora do Sítio:{print ? <h4 className="semcordados1">{dataForaSitio}</h4> : null} </h4>
              </div>
            </div>

            <button
                onClick={() => { setPrint(true); }}
                className="espacosubmeter btnSubmeterTrackerrr"
            >
              Apresentar dados
            </button>

            <Link to={
              "/feed"
            }><button className="espacosubmeter btnSubmeterTrackerrr">
              Submeter dados
            </button></Link>

          </div>
        </div>
        <Footer />
      </div>
  );
};

export default Tracker;