import React, {useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import "./SignUp_Aluno.css";


function SignUpSumUp() {

    let primeiro='Sofia';
    let ultimoNome='Maria';
    let user='sbvogensen@gmail.com'
    let avatar1 = `https://avatars.dicebear.com/api/big-smile/1.svg`;


        let gerar = () => {
            console.log('boa tarde')
            let randomAva1 = () => {
                return (Math.floor(Math.random() * 30))
            }
            let seed1 = randomAva1();


            avatar1 = `https://avatars.dicebear.com/api/big-smile/${seed1}.svg`;

        }

        return (
            <div className='CompSumUp'>
                <Navbar/>

'

                <div className='textaligninputs corbranca'>
                <h3 className='tituloprincipal'>Bem vindo {primeiro} {ultimoNome}</h3>
                    <p>Estas a utilizar a conta {user}</p>


                    <div className='escolherAva'>
                        <p id='escolhe'> Escolhe o teu avatar</p>
                        <img src={avatar1} className='profile'/></div>
                    <button id='refresh' onClick={gerar}>Refresh</button>
                <br/>
                <button className="btnHsignup btnsignup" type={"text"}>
                    <a href="/feed">Entrar no feed</a>
                </button> </div>
            </div>
        );
    }

export default SignUpSumUp;