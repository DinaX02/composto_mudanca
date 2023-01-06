import React, {useState} from 'react'
import './Tutorial.css'
import dataSlider from './dataSlider';
import Navbar from '../components/Navbar/Navbar';
//import imagem1 from './imgTutorial/tutorial_instr_1.png'
//import imagem2 from './imgTutorial/tutorial_instr_2.png'
//import imagem3 from './imgTutorial/tutorial_instr_3.png'
//import imagem4 from './imgTutorial/tutorial_instr_4.png'
//import imagem5 from './imgTutorial/tutorial_instr_5.png'
//import imagem6 from './imgTutorial/tutorial_instr_6.png'

//const imagens =[imagem1,imagem2,imagem3,imagem4,imagem5,imagem6]

export default function Tutorial(){

  const [slideIndex, setSlideIndex] = useState(1)


  const moveDot = index => {
      setSlideIndex(index)
  }

  return (
    <div>
 <Navbar/>
<div className='btnvoltarfundo'>
    <a href='/tracker'><button className="voltartutorial">Voltar</button></a>
    </div>
    <div className="divtutorial">
        <h1 className="titulotutorial">Como Depositar os teus resíduos</h1>

        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/tutorial_instr_${index + 1}.png`} 
                        />
                    </div>
                )
            })}    
        </div>

        <div className="container-dots">
                {Array.from({length: 6}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>

    </div>
    </div>
  );
};

