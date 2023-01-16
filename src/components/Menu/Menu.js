import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="MenuComp">
      <div id="navbary"></div>

      <div className="flex-parent-element">
        <div className="flex-child-element magenta">
          <div id="Tracker">
            <a href="/tracker">
              <img
                className="imgMenu"
                src={require("./Compostor_Tracker_Copy.png")}
                alt="compostericon"
              />
            </a>
          </div>
        </div>
        <div className="flex-child-element green">
          <div>
            <a href="#GoToLearn">
              <img
                id="LearnMore"
                className="mt-2 imgMenu"
                src={require("./icons8-repository-96.png")}
                alt="Learn more Button"
              />
            </a>
          </div>
        </div>
        <div className="flex-child-element green">
          <div>
            <a href="#GoToTurnos">
              <img
                id="Turnos"
                className="imgMenu"
                src={require("./icons8-calendar-96.png")}
                alt="turnos"
              />
            </a>
          </div>
        </div>
      </div>
      <p id="diretamente">
        <a href="#go"> Ir diretamente ao feed</a>
      </p>
      <br />
    </div>
  );
};

export default Menu;
