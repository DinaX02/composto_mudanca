import React from "react";
import {useState} from "react";
import './Tutorial.css'
import Navbar from '../components/Navbar/Navbar';

import imagem1 from './imgTutorial/tutorial_instr_1.png'
import imagem2 from './imgTutorial/tutorial_instr_2.png'
import imagem3 from './imgTutorial/tutorial_instr_3.png'
import imagem4 from './imgTutorial/tutorial_instr_4.png'
import imagem5 from './imgTutorial/tutorial_instr_5.png'
import imagem6 from './imgTutorial/tutorial_instr_6.png'

const imagens =[imagem1,imagem2,imagem3,imagem4,imagem5,imagem6]

const Tutorial = () => {

  return (
    <div className="divtutorial">
      <Navbar/>
        <h1 className="titulotutorial">Como Depositar os teus resíduos</h1>
        
    </div>

  );
};

export default Tutorial;