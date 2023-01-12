import React from "react";
import Menu from "../components/Menu/Menu";
import Atividade from "../components/Atividade/Atividade";
import Equipas from "../components/Equipas/Equipas";
import Turnos from "../components/Turnos/Turnos";
import { useState } from "react";

const Feed = ({dataBreveD,dataSelected}) => {


  return (
    <div>
      
        <Menu/>
        <Atividade/>
        <Equipas/>
        <Turnos/>

    </div>
  );
};

export default Feed;