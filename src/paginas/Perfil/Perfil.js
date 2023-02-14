import React, { useState } from "react";
import "./Perfil.css";
import Calendar from "react-github-contribution-calendar";
import {Link} from "react-router-dom";
import Footer from "../../components/Footer/Footer";


let thisHtml =
  " <div  className='post'>\n" +
    "            <div className='flexy'>\n" +
    "                <p className='corpo log'>Colocaste cascas de ovo no 11/01 Às 10:15</p>\n" +
    "                <p></p>\n" +
  "            </div>\n" +
  "        </div>";

const Perfil = ({

                    fotoPerfil,
                    setFotoPerfil,
                }) => {
    let values = {
        "2016-06-23": 1,
        "2016-06-26": 2,
        "2016-06-27": 3,
        "2016-06-28": 4,
        "2016-06-29": 4,
    };
    let until = "2016-06-30";
    let elem = document.getElementById("app");

  return (
    <div className="CompPerfil">
        <Link to={"/feed"}>
            <button className="voltar">Voltar</button>
        </Link>
        <div id="Avatar">
            <button>
                <img
                    src={`https://avatars.dicebear.com/api/big-smile/9.svg`}
                    className="Perfil"
                ></img>
            </button>
            <h2 className='corbranca'>O teu perfil</h2> <br/>
            <label className="labels"> Coordenador </label>
            <label className="labelequipa">Equipa 1</label>
        </div>

      <br></br>
      <h5 className="titles">Atividade Recente</h5>

      <div
        className="content post"
        dangerouslySetInnerHTML={{ __html: thisHtml }}
      ></div>

      <h5 className="titles">Contribuições</h5>
      <div id="graph" className="post">
        <Calendar values={values} until={until} />
      </div>

      <Footer/>
    </div>
  );
};

export default Perfil;
