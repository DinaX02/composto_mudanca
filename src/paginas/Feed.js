import React from "react";
import Menu from "../components/Menu/Menu";
import Atividade from "../components/Atividade/Atividade";
import Equipas from "../components/Equipas/Equipas";
import Turnos from "../components/Turnos/Turnos";
import { useState } from "react";
import NavbarSignedIn from "../components/Navbar/NavbarSignedIn";

const Feed = ({dataBreveD,dataSelected}) => {
    //fazer um array com dados random para utilizar em random logs com spread operators;
    //new randomlogs={nome:'Joana';resíduo:'Borras de Café';data:'11/11';horas:`${.getTime()}`}


    let avatar1 = `https://avatars.dicebear.com/api/big-smile/1.svg`;
    let avatar2 = `https://avatars.dicebear.com/api/big-smile/2.svg`;
    let avatar3 = `https://avatars.dicebear.com/api/big-smile/3.svg`;


    let randomAva1 = () => {
        return(Math.floor(Math.random() * 30))
    }

    let randomAva2 = () => {
        return(Math.floor(Math.random() * 30))
    }

    let randomAva3 = () => {
        return(Math.floor(Math.random() * 30))
    }
    function refreshPage() {
        window.location.reload(false);
    }
    let gerar = () =>{
        console.log('boa tarde')

        let seed1 = randomAva1();
        let seed2 = randomAva2();
        let seed3 = randomAva3();

        avatar1 = `https://avatars.dicebear.com/api/big-smile/${seed1}.svg`;
        avatar2 = `https://avatars.dicebear.com/api/big-smile/${seed2}.svg`;
        avatar3 = `https://avatars.dicebear.com/api/big-smile/${seed3}.svg`;

        console.log(avatar1);
        console.log(avatar2);
        console.log(avatar3);

    }

  return (
    <div>
        <NavbarSignedIn/>
        <Menu/>
        <div className="CompAtividade">
            <br/>
            <br/>

            <h5>
                Atividade Recente
            </h5>
            <p id='recent'></p>
            <br></br>
            <button id='refresh' onClick={gerar()}><a onClick={()=>{window.location.reload(false)}}>Refresh</a> </button>


            <div className='post'>
                <p className='equipalabel'>Equipa [nome da equipa]</p>
                <div className='flexy'>
                    <div className='divimagem'>
                        <img src={avatar1} className='profile'/>
                    </div>
                    <p className='corpo log'>João colocou bananas no 31/12 Às 13:43</p>
                    <p ></p>
                </div>
            </div>

            <div className='post'>

                <p className='equipalabel'>Equipa [nome da equipa]</p>
                <div className='flexy'>
                    <div className='divimagem'>
                        <img src={avatar2} className='profile'/>
                    </div>
                    <div>
                        <p className="corpo log">[PrimeiroNome] colocou  {dataSelected} às [horas] no dia [data]</p>
                    </div>

                </div>
                <div><p className="log">Breve Descrição: {dataBreveD}</p></div>
                <div><p className="log">Algo Fora do Sítio: {dataBreveD}</p></div>



            </div>

            <div className='post'>
                <p  className='equipalabel'>Equipa [nome da equipa]</p>
                <div className='flexy'>
                    <div className='divimagem'>
                        <img src={avatar3} className='profile'/>
                    </div>
                    <p className="corpo log"> João colocou bananas no 31/12 Às 13:43</p></div>
            </div>
            <a href="/tracker"><button>Regista a tua mais recente atividade</button></a>
            <a href="/learnmore"><button>LearnMore</button></a>
        </div>

        <Equipas/>
        <Turnos/>

    </div>
  );
};

export default Feed;