import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
  return (
    <div>
      <div className="feed_geral">
        <div className="div_texto_feeed">
          <div className="espaco_novo">
            <h1 className="espaco_top">
              Bem Vindo ao<br></br>Composto de Mudança
            </h1>
          </div>
          <div className="icons_feed">
            <div className="textos_icons_center">
              <Link to="/tracker">
                <img
                  className="imgMenufeed space_iconss"
                  src={require("./Compostor_Tracker_Copy.png")}
                />
              </Link>
              <p className="h3_icons">Deposita o teu composto</p>
            </div>
            <div className="textos_icons_center">
              <a href="#GoToLearn">
                <img
                  className="imgMenufeed space_iconss"
                  src={require("./icons8-repository-96.png")}
                />
              </a>
              <p className="h3_icons">Testa os teus conhecimentos</p>
            </div>
            <div className="textos_icons_center">
              <a href="#GoToTurnos">
                <img
                  className="imgMenufeed space_iconss"
                  src={require("./icons8-calendar-96.png")}
                />
              </a>
              <p className="h3_icons">Planeia o teu turno</p>
            </div>
            <div className="espaco_antes_btn"></div>
            <div className="btn_lg_screens">
              <a href="#go">
                <button className="btn_feeeed">Explora</button>
              </a>
            </div>
          </div>
        </div>
        <div className="img_feeed">
          <img className="img_feed" src={require("./hero_img_feed.png")} />
          <div className="seta">
            <a href="#go">
              <img className="seta_ajuste" src={require("./setadown.png")} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
