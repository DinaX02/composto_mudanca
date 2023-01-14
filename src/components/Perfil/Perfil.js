import React, { useState } from "react";
import logo from '../Navbar/logo_composto_mudanca-8.png'
import './Perfil.css'
import ReactDOM from 'react-dom';
import Calendar from 'react-github-contribution-calendar';
import SignUpSumUp from "../../paginas/SignUpSumup";

const Perfil = ()=> {

    let thisHtml = ' <div  className=\'post\'>\n' +
        '            <p className=\'equipalabel\'>Equipa 1</p>\n' +
        '            <div className=\'flexy\'>\n' +
        '                <p className=\'corpo log\'>João colocou cascas de ovo no 11/01 Às 10:15</p>\n' +
        '                <p></p>\n' +
        '            </div>\n' +
        '        </div>'

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

        //TODO colocar variaveis de nome e tracker
        <div className="content post" dangerouslySetInnerHTML={{__html: thisHtml}}></div>


        <h5 className='titles'>Contribuições</h5>
        <div id='graph' className='post'><Calendar values={values} until={until}/></div>


    </div>
    )
}

export default Perfil
