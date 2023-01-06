import React from "react";
import "./Tracker.css";

const Tracker = () => {
  return (  

    <div>
<div className='headertracker'>
    <button className="voltar">Voltar</button>
</div>
    <h1 className="titulos">Tracker</h1>
    <p>Regista a entrada de resíduos no compostor</p>
    <img src={require('./Compostor_Tracker.png')} alt="compostor" width="20%" height="40%"/> 
  <div className='trackerform'>
  
    <p id='LocationText'>Location:<span id='Currentlocation'>Chaves</span>  </p>
    <h7> Não é a tua localização? Muda aqui</h7>
    <br></br>
    <br></br>
      <label for="residuos">Escolhe o tipo de resíduos</label><br></br>
      <select name="residuos" id="residuos">
        <option value="select">Seleciona uma opção</option>
        <option value="frutalegumes">Restos de fruta e legumes crus</option>
        <option value="borras">Borras de café e chá</option>
        <option value="filtros">Filtros de papel para chafé ou café usados</option>
        <option value="podas">Podas, folhas relva e outros resíduos verdes</option>
        <option value="ovos">Cascas de ovos limpas</option>
      </select>
      <br></br>
      <label for="description">Coloca uma breve descrição sobre os resíduos:</label><br></br>

      <textarea id="description" name="description" rows="4" cols="50"> </textarea>
  
      <br></br> 
      <input type="submit" value="Submeter"/>
      </div>
      
    <p>Não tens a certeza se podes colocar um tipo de resíduo? Revê um rápido tutorial</p>
    <p>Vês algo fora do sítio?</p>
    <input type="submit" value="Denunciar"/>

    </div>

  );
};

export default Tracker;