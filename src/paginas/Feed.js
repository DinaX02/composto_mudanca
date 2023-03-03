import React, { useState } from "react";
import "../components/Turnos/Calendario.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import Menu from "../components/Menu/Menu";
import "./Feed.css";
import NavbarSignedIn from "../components/Navbar/NavbarSignedIn";
import LearnMore from "./Quiz/LearMore";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-datepicker/dist/react-datepicker.css"
import FooterFeed from "../components/Footer/FooterFeed";
import { Link } from "react-router-dom";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Equipa 2",
    allDay: true,
    start: new Date(2023, 1, 11),
    end: new Date(2023, 1, 16),
  },
  {
    title: "Equipa 3",
    allDay: true,
    start: new Date(2023, 1, 16),
    end: new Date(2023, 1, 21),
  },
  {
    title: "Equipa 1",
    allDay: true,
    start: new Date(2023, 1, 22),
    end: new Date(2023, 1, 27),
  },
];

const Feed = ({
  dataBreveD,
  dataSelected,
  dataForaSitio,
  apelido,
  nomeEquipa,
  usernamenovo,
  datainput,
  tempoinput,
}) => {
  console.log(apelido);

  //fazer um array com dados random para utilizar em random logs com spread operators;
  //new randomlogs={nome:'Joana';resíduo:'Borras de Café';data:'11/11';horas:`${.getTime()}`}

  let avatar1 = `https://avatars.dicebear.com/api/big-smile/1.svg`;
  let avatar2 = `https://avatars.dicebear.com/api/big-smile/2.svg`;
  let avatar3 = `https://avatars.dicebear.com/api/big-smile/3.svg`;

  let randomize = [
    ["Joana", "Maria", "Martim", "Carina"],
    ["bananas", "borras", "matéria seca", "frutas"][
      ("11:53", "11:54", "12:00", "12:30")
    ],
    ["11/0", "09/01", "10/01", "12/01"],
  ];

  let randomAva1 = () => {
    return Math.floor(Math.random() * 40);
  };



  let randomAva3 = () => {
    return Math.floor(Math.random() * 40);
  };
  function refreshPage() {
    window.location.reload(false);
  }
  let gerar = () => {
    console.log("boa tarde");

    let seed1 = randomAva1();
    let seed3 = randomAva3();

    avatar1 = `https://avatars.dicebear.com/api/big-smile/${seed1}.svg`;
    avatar3 = `https://avatars.dicebear.com/api/big-smile/${seed3}.svg`;

    console.log(avatar1);
    console.log(avatar3);
  };
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvent, setAllEvent] = useState(events);

  function handleAddEvent() {
    setAllEvent([...allEvent, newEvent]);
  }

  return (
      <div className="compFeed" id='topo'>
        <NavbarSignedIn/>
        <Menu/>
        <div className="CompAtividade">
          <br/>
          <br/>

          <h5 id="go">Atividade Recente</h5>
          <p id="recent"></p>
          <br></br>
          <button id="refresh" onClick={gerar()}>
          <a
            onClick={() => {
              window.location.reload(false);
            }}
          >
            Refresh
          </a>{" "}
        </button>

        <div className="post">
          <p className="equipalabel">{nomeEquipa}</p>
          <div className="flexy">
            <div className="divimagem">
              <img src={avatar1} className="profile"/>
            </div>
            <p className="corpo log">
              colocou cascas de ovo às 11:49 no dia 16/01
            </p>
            <p></p>
          </div>
        </div>

        <div className="post">
          <p className="equipalabel">{nomeEquipa}</p>
          <div className="flexy">
            <div className="divimagem">
              <img src='https://avatars.dicebear.com/api/big-smile/9.svg' className="profile"/>
            </div>
            <div>
              <p className="corpo log">
                colocou {dataSelected} às {datainput} no dia {tempoinput}
              </p>
            </div>
          </div>
          <div>
            <p className=" alinhar_frase_esq log"><strong>Breve Descrição:</strong> <span>{dataBreveD}</span></p>
          </div>
          <div>
            <p className=" alinhar_frase_esq log"><strong>Algo Fora do Sítio:</strong><span>{dataForaSitio}</span></p>
          </div>
        </div>

        <div className="post">
          <p className="equipalabel">{nomeEquipa}</p>
          <div className="flexy">
            <div className="divimagem">
              <img src={avatar3} className="profile"/>
            </div>
            <p className="corpo log">
              {" "}
              colocou borras de café às 8:20 no dia 11/01
            </p>
          </div>
        </div>
        <Link to="/tracker">
          <button>Regista a tua mais recente atividade</button>
        </Link>
      </div>
      <span id="GoToLearn" />
      <LearnMore />

      <br />
      <br />
      <div className="compCalendario">
        <h1 className="corbranca" id="GoToTurnos">
          Turnos
        </h1>

        <div>
          <input
            type="text"
            placeholder="Descrição do Turno"
            style={{ width: "60%", marginRight: "10px" }}
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
        </div>
        <div>
          <DatePicker
            placeholderText="Começo (Formato M/D/A)"
            style={{ marginLeft: "10px" }}
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          />
        </div>
        <DatePicker
          placeholderText="End (Formato M/D/A)"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Adicionar Turno
        </button>
      </div>
      <Calendar
          localizer={localizer}
          events={allEvent}
          startAcessor="start"
          endAcessor="end"
          style={{
            height: "500px",
            marginTop: "2em",
            marginLeft: "1em",
            marginRight: "1em",
            backgroundColor: "white",
            padding: "1em",
            borderRadius: "2em",
          }}
      /><br/><br/>
      <div className="spacerrFeed_footer">
      <span className="esapcofooterfeed"></span>
      </div>
        <FooterFeed/>

      </div>
  );
};

export default Feed;
