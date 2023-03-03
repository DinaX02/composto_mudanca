import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="espacofooter">
        <div className="spacerF layerfooter flexyfooter">

            <div className="footermarginbot">
                <p className="footerh2"></p>
            </div>
            <ul className='footerItems'>
                <li><Link to='/about'>About us</Link></li>
                <li><Link to='/'>Home Page</Link></li>
                <li><Link to='https://github.com/DinaX02/composto_mudanca' target='_blank'>Github Project</Link></li>
                <li><Link to='/signup' target='_blank'>Sign up</Link></li>
            </ul>

            <div className='logosFooter'>
                <div className='flexydiv1'>
                    <img className="espacinhofooter" src={require('./logo1.png')} width='10%' height='5%'/>
                    <img className="espacinhofooter" src={require('./logo2.png')} width='25%' height='10%'/>

                </div>
                <div className='flexydiv'>
                    <p className='corbrancac css espacinhoparagrafofooter'>
                        Projeto Final - Tecnologias Avançadas Client-Side
                    </p>
                </div>
            </div>


        </div>
    </footer>
  );
};

export default Footer;
