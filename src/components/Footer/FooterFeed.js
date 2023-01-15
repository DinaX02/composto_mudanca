import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="spacerF layerfooter flexyfooter">

                <div className="footermarginbot">
                    <p className="footerh2"></p>
                </div>
                <ul className='footerItems'>
                    <li><a href='#topo' className='css'>Voltar para o topo</a></li>
                </ul>

                <div className='logosFooter'>
                    <div className='flexydiv1'>
                        <img src={require('./logo1.png')} width='10%' height='5%'/>
                        <img src={require('./logo2.png')} width='25%' height='10%'/>

                    </div>
                    <div className='flexydiv'>
                        <p className='corbrancac css'>
                            Projeto Final - Tecnologias Avançadas Client-Side
                        </p>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
