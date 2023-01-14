import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
    <div className="Headerfundo">
      <h3 className="espacoh3">Começe como...</h3>

      <a href="/signupprofessor"><button className="btnHeader btnHomePage" type="button">Professor</button></a>
      <a href="/signupaluno"><button className="btnHeader btnHomePage espacobtns" type="button">Aluno</button></a>

      </div>
      <div className="spacer layerHeader"></div>
    </div>
  );
};

export default Header;
