import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="espacofooter">
            <div className="spacerF layerfooter flexyfooter">

                <div className="footermarginbot">
                    <p className="footerh2"></p>
                </div>
                <p className='footerItems'>
                    <Link to='#topo' className='css'>Voltar para o topo</Link>
                </p>

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
