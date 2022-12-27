import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
    <div className="Headerfundo">
      <h1 className="h1first">Composto de Mudança</h1>
      <h3 className="espacoh3">Começe como...</h3>

      <button className="btnHeader btnHomePage" type="button">Professor</button>
      <button className="btnHeader btnHomePage espacobtns" type="button">Aluno</button>

      </div>
      <div className="spacer layerHeader"></div>
    </div>
  );
};

export default Header;
