import React from 'react';
import "./Menu.css";

function  PaginaEquipas() {
    return (
        <div className='MenuComp'>
            <div id='navbary'>
                <div className='avatar imgMenu'>
                    <img src='https://avatars.dicebear.com/api/big-smile/9.svg'/>
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

                        <img className="imgMenu" src={require('./Compostor_Tracker_Copy.png')} alt='compostericon'/>

                    </div>
                    <div>
                        <img id='Perfil' className="imgMenu" src={require('./icons8-customer-96.png')} alt='perfil'/>
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

export default PaginaEquipas;
