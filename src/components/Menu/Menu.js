import React from "react";
import "./Menu.css";
import OverlaySettings from "../Overlay/OverlaySettings";
const Menu = () => {
  return (
    <div className='MenuComp'>
    <div id='navbary'>
    <div className='avatar imgMenu'>
        <a href='/perfil'> <img src='https://avatars.dicebear.com/api/big-smile/9.svg'/> </a>
    </div>
    <div id='settings' onClick={<OverlaySettings/>}>
    <button ></button>
    
    <button ></button>
    <button></button>
    </div></div>
    <div className='settings'>
        
    </div>
    <div className='flex-parent-element'>
        <div className='flex-child-element magenta'>
            <div id='Tracker'>

                <a href='/tracker'><img className="imgMenu" src={require('./Compostor_Tracker_Copy.png')} alt='compostericon'/></a>

            </div>
            <div>
                <img id='LearnMore' className="mt-2 imgMenu" src={require('./icons8-repository-96.png')} alt='Learn more Button'/>
            </div>
        </div>

        <div className="flex-child-element green">
            <div>
                <img id='Equipas' className="imgMenu" src={require('./icons8-calendar-96.png')} alt='equipas'/>

            </div>
            <div>
                <img id='Turnos' className="imgMenu" src={require('./icons8-community-96.png')} alt='turnos'/>
            </div>
        </div>
    
   
    </div>
     <p id='diretamente'>Ir diretamente ao feed</p>

     </div>
  );
};

export default Menu;
