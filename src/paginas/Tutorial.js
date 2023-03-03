import React, {useState} from 'react'
import './Tutorial.css'
import dataSlider from './dataSlider';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

export default function Tutorial(){

  const [slideIndex, setSlideIndex] = useState(1)


  const moveDot = index => {
      setSlideIndex(index)
  }

  return (
    <div>
 <Navbar/>
<div className='btnvoltarfundo'>
    <Link to='/tracker'><button className="voltartutorial">Voltar</button></Link>
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


    <Footer/>
    </div>
  );
};

