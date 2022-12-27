import React from "react";

const Tracker = () => {
  return (  

    <div>

    <button id="voltar">Voltar</button>
    <h1 className="titulos">Tracker</h1>
    <img src="Compostor_Tracker.png" alt="compostor" width="30%" height="50%"/>
    <p>Regista a entrada de resíduos no compostor</p>
    <h6>Location :  </h6>

      <label for="residuos">Escolhe o tipo de resíduos</label>
      <select name="residuos" id="residuos">
        <option value="select">Seleciona uma opção</option>
        <option value="frutalegumes">Restos de fruta e legumes crus</option>
        <option value="borras">Borras de café e chá</option>
        <option value="filtros">Filtros de papel para chafé ou café usados</option>
        <option value="podas">Podas, folhas relva e outros resíduos verdes</option>
        <option value="ovos">Cascas de ovos limpas</option>
      </select>
      <br></br>
      <input type="submit" value="Submit"></input>


    <p>Não tens a certeza se podes colocar um tipo de resíduo? Revê um rápido tutorial</p>
    <p>Vês algo fora do sítio?</p>
    <input type="submit" value="Denunciar">
    </input>

    </div>

  );
};

export default Tracker;