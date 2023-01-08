import React from "react";
import "./Tracker.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
const Tracker = () => {
  return (
    <div>
      <Navbar />
      <div>
        <a href="/feed"><button className="voltar"> Voltar</button></a>
      </div>
      <div className="trackeralinharcentro">
        <h1 className="titulostracker">Tracker</h1>
        <div>
          <p className="h7headertracker">
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
          <p id="LocationText">
            Location:<span id="Currentlocation"> Surprise </span>{" "}
          </p>
          <br></br>
          <br></br>
          <p className="reduzirespacoppp"> Não é a tua localização?<a className="hiperlitracker" href="/location"> Muda aqui</a></p>
          <br></br>
          <br></br>
          <div className="brevedescricaotracker">
            <label for="residuos">Escolhe o tipo de resíduos</label>
          </div>
          <br></br>
          <select name="residuos" id="residuos">
            <option value="select">Seleciona uma opção</option>
            <option value="frutalegumes">Restos de fruta e legumes crus</option>
            <option value="borras">Borras de café e chá</option>
            <option value="filtros">
              Filtros de papel para chafé ou café usados
            </option>
            <option value="podas">
              Podas, folhas relva e outros resíduos verdes
            </option>
            <option value="ovos">Cascas de ovos limpas</option>
          </select>
          <br></br>
          <div className="brevedescricaotracker">
            <label for="description">
              Coloca uma breve descrição sobre os resíduos:
            </label>
          </div>
          <br></br>

          <input id="description" name="description" type="text" cols="40" 
       rows="5"></input>

          <br></br>
          <div className="brevedescricaotracker">
            <label for="description">Vês algo fora do sítio?</label>
          </div>
          <br></br>

          <input type="text" id="description" name="description" cols="40" 
       rows="5"></input>

          <div className="frasesobretutorialTracker">
            <p className="espacosubmeter">
              Não tens a certeza se podes colocar um tipo de resíduo
              <a className="hiperlitracker" href="/tutorial">
                {" "}
                Clique aqui{" "}
              </a>{" "}
              para ver um rápido tutorial
            </p>
          </div>
          <input
            className="espacosubmeter btnSubmeterTrackerrr"
            type="submit"
            value="Submeter"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tracker;
