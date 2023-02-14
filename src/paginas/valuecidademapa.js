import React, { useState } from "react";
import Mapp from "./Testemap";
import { Link } from "react-router-dom";
import "./Tutorial.css";
import Footer from "../components/Footer/Footer";



const Valuecidade = ({ localizacaoinput,setLocalizacaoinput}) => {
  return (
    <div>
      <Mapp />
      <div className="espacotopmapa">
          <label className="escolahcidade">
            <strong>Escolha Cidade</strong>
          </label>
          <br></br>
          <select className="inputcidadesgeral"
            id="cidade"
            name="cidade"
            placeholder="Escolha cidade"
            onChange={(e) => setLocalizacaoinput(e.target.value)}
          >
            <option value="Não Selecionda">Seleciona uma opção</option>
            <option value="Aveiro">Aveiro</option>
            <option value="Chaves">Chaves</option>
            <option value="Peniche">Peniche</option>
          </select>

          <div className="fundoverdeeeeeeemapa">
          <Link to={"/tracker"}>
            <button className="btnsubmterMAPAAA">Submeter</button></Link>
        </div>

        </div>

<Footer/>
    </div>
  );
};

export default Valuecidade;
