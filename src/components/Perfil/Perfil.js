import React, { useState } from "react";
import logo from '../Navbar/logo_composto_mudanca-8.png'
import './Perfil.css'
//TODO: GITHUB CONTRIBUTION GRAPH

const Perfil = ()=> {
    return(
    <div>
       
    <button className="voltar">Voltar</button>
    <div id="Avatar" >
        <button>
            <img  src={`https://avatars.dicebear.com/api/big-smile/9.svg`} className='Perfil'></img>
        </button>
        <h2>João</h2>

    </div> 
    <br></br>
        <p>Atividade Recente</p>
    <div className='post'>
    <p>Equipa [nome da equipa]</p>
    <div className='flexy'>
    <div className='divimagem'>
    </div>
    <p>João colocou bananas no 31/12 Às 13:43</p>
    </div>
    </div>
    
    <div className='post'>
    <p>Equipa [nome da equipa]</p>
    <div className='flexy'>
    <div className='divimagem'>
    </div>
    <p>João colocou bananas no 31/12 Às 13:43</p>
    </div>
    </div>
    
    <div className='post'>
    <p>Equipa [nome da equipa]</p>
    <div className='flexy'>
    <div className='divimagem'>
    </div>
    <p>João colocou bananas no 31/12 Às 13:43</p>
    </div>
    </div>
</div>
    )
}

export default Perfil
