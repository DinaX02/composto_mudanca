import React from "react";
import "./Turnos.css";

const Turnos = () => {

  const datas=[9,11,12,13,14,15,16,17,18,19];

  return (
    <div className="CompTurnos" id='GoToTurnos'>

        <h2 id='tituloturnos'>Turnos</h2>
        <div id='setasTurnos'>
        <p></p>
        </div>
      <p id="ola"> <a>This week</a> | <a> Next Week </a>| <a>This Month</a> </p>
        <div className="calendar">
  <div className="timeline">
    <div className="spacer"></div>
    <div className="time-marker">9 AM</div>
    <div className="time-marker">10 AM</div>
    <div className="time-marker">11 AM</div>
    <div className="time-marker">12 PM</div>
    <div className="time-marker">1 PM</div>
    <div className="time-marker">2 PM</div>
    <div className="time-marker">3 PM</div>
    <div className="time-marker">4 PM</div>
    <div className="time-marker">5 PM</div>
    <div className="time-marker">6 PM</div>
  </div>
  <div className="days">
    <div className="day mon">
      <div className="date">
        <p className="date-num">9</p>
        <p className="date-day">Mon</p>
      </div>
      <div className="events">
        <div className="event start-2 end-5 securities">
          <p className="title">João Ribeiro</p>
          <p className="time">2 PM - 5 PM</p>
        </div>
      </div>
    </div>
    <div className="day tues">
      <div className="date">
        <p className="date-num">10</p>
        <p className="date-day">Tues</p>
      </div>
      <div className="events">
        <div className="event start-10 end-12 corp-fi">
          <p className="title">Ana Rita Alves</p>
          <p className="time">10 AM - 12 PM</p>
        </div>
        <div className="event start-1 end-4 ent-law">
          <p className="title">Joana Martins</p>
          <p className="time">1PM - 4PM</p>
        </div>
      </div>
    </div>
    <div className="day wed">
      <div className="date">
        <p className="date-num">11</p>
        <p className="date-day">Wed</p>
      </div>
      <div className="events">
        <div className="event start-12 end-1 writing">
          <p className="title">Ruben Silva</p>
          <p className="time">11 AM - 12 PM</p>
        </div>
        <div className="event start-2 end-5 securities">
          <p className="title">Leandro Gomes</p>
          <p className="time">2 PM - 5 PM</p>
        </div>
      </div>
    </div>
    <div className="day thurs">
      <div className="date">
        <p className="date-num">12</p>
        <p className="date-day">Thurs</p>
      </div>
      <div className="events">
        <div className="event start-10 end-12 corp-fi">
          <p className="title">Nuno Guilherme</p>
          <p className="time">10 AM - 12 PM</p>
        </div>
        <div className="event start-1 end-4 ent-law">
          <p className="title">Sofia Alves</p>
          <p className="time">1PM - 4PM</p>
        </div>
      </div>
    </div>
    <div className="day fri">
      <div className="date">
        <p className="date-num">13</p>
        <p className="date-day">Fri</p>
      </div>
      <div className="events">
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Turnos;
