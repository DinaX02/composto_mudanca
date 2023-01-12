import React, { useState } from "react";
import logo from '../Navbar/logo_composto_mudanca-8.png'
import './Perfil.css'
import Grid from "../GithubGrid/grid";
//TODO: GITHUB CONTRIBUTION GRAPH

const Perfil = ()=> {
    return(
    <div className='CompPerfil'>
       
    <a href='/feed'><button className="voltar">Voltar</button></a>
    <div id="Avatar" >
        <button>
            <img  src={`https://avatars.dicebear.com/api/big-smile/9.svg`} className='Perfil'></img>
        </button>
        <h2>João</h2>
        <label className='labels'>  Coordenador  </label>
        <label className='labelequipa'>Equipa 2</label>


    </div> 
    <br></br>
        <h5 className='titles'>Atividade Recente</h5>
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

    <Grid/>
</div>
    )
}

export default Perfil
