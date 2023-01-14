import React, {useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./SignUp_Aluno.css";

function SignUpSumUp() {
    const [usernamenovo,setUsernamenovo]=useState('');
    const [apelido,setApelido]=useState('');

    //let primeiro='Sofia';
    //let ultimoNome='Maria';
    let user='sbvogensen@gmail.com'
    let avatar1 = `https://avatars.dicebear.com/api/big-smile/1.svg`;
    let randomAva1 = () => {
        return (Math.floor(Math.random() * 30))
    }

        let gerar = () => {

        console.log('entrei')
            let seed1 = randomAva1();


            avatar1 = `https://avatars.dicebear.com/api/big-smile/${seed1}.svg`;

        }

        return (
            <div className='CompSumUp'>
                <Navbar/>

'

        <div className='textaligninputs corbranca'>
            <p className="espacoparainPuts">Por Favor Insira os Seguintes dados :</p>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Primeiro Nome..."
          value={usernamenovo}
          onChange={(e) => setUsernamenovo(e.target.value)}
        />

        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Apelido..."
          value={apelido}
          onChange={(e) => setApelido(e.target.value)}
        />

  
                <h3 className='tituloprincipal'>Bem vindo {usernamenovo} {apelido}</h3>
                    <p>Estas a utilizar a conta {user}</p>


                    <div className='escolherAva'>
                        <p id='escolhe'> Escolhe o teu avatar</p>
                        <button id='refresh' onClick={gerar()}><a onClick={()=>{window.location.reload(false)}}> Refresh</a></button>

                        <div><img src={avatar1} className='profile'/></div></div>



                <br/>
                <button className="btnHsignup btnsignup" type={"text"}>
                    <a href="/feed">Entrar no feed</a>
                </button> </div>
            </div>
        );
    }

export default SignUpSumUp;