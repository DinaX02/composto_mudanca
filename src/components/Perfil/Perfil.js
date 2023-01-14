import React, { useState } from "react";
import logo from '../Navbar/logo_composto_mudanca-8.png'
import './Perfil.css'
import ReactDOM from 'react-dom';
import Calendar from 'react-github-contribution-calendar';
import SignUpSumUp from "../../paginas/SignUpSumup";

const Perfil = ()=> {
    let values = {
        '2016-06-23': 1,
        '2016-06-26': 2,
        '2016-06-27': 3,
        '2016-06-28': 4,
        '2016-06-29': 4
    }
    let until = '2016-06-30';
    let elem = document.getElementById('app');
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
        <h5 className='titles'>Contribuições</h5>
        <div id='graph' className='post'><Calendar  values={values} until={until} /></div>




    </div>
    )
}

export default Perfil
