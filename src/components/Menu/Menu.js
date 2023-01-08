import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className='MenuComp'>
    <div id='navbary'>
    <div className='avatar'>
        <button><img className="imgMenu" src='https://avatars.dicebear.com/api/big-smile/9.svg'/></button>
    </div>
    <div id='settings'>
    <button ></button>
    
    <button ></button>
    <button></button>
    </div></div>
    <div className='settings'>
        
    </div>
    <div className='flex-parent-element'>
        <div className='flex-child-element magenta'>
            <div>
                <button id='Tracker'> 
                <img className="imgMenu" src={require('./Compostor_Tracker_Copy.png')} alt='compostericon'/>
                </button>
            </div>
            <div>
                <button id='Perfil'>
                <img className="imgMenu" src={require('./icons8-customer-96.png')} alt='perfil'/>
                </button>
            </div>
        </div>

        <div className="flex-child-element green">
            <div>
                <button id='Equipas'>
                <img className="imgMenu" src={require('./icons8-calendar-96.png')} alt='equipas'/>
                </button>
                
            </div>
            <div>
                <button id='Turnos'>
                <img className="imgMenu" src={require('./icons8-community-96.png')} alt='turnos'/>
                </button>
            </div>
        </div>
    
   
    </div>
     <p id='diretamente'>Ir diretamente ao feed</p>

     </div>
  );
};

export default Menu;
