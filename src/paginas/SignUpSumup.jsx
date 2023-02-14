import React, {useState} from "react";
//import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./SignUp_Aluno.css";
import Footer from "../components/Footer/Footer";

const SignUpSumUp = ({usernamenovo,apelido,setApelido,setUsernamenovo}) => {



    let avatar1 = `https://avatars.dicebear.com/api/big-smile/9.svg`;


        return (
            <div className='CompSumUp'>

<p className="transparentP">'</p>

                <div className='textaligninputs corbranca'>


                    <h3 className='tituloprincipal'>Bem vindo {usernamenovo} {apelido}</h3>

                    <div className='escolherAva'>


                    <div><img src={avatar1} className='profile novobgcololorperfil'/></div>
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
                    </div>

                <br/>


                <button className="btnHsignup btnsignup" type={"text"}>
                    <Link to={"/feed"}>Entrar no feed</Link>
                </button> </div>

                <Footer/>
            </div>
        );
    }
    
export default SignUpSumUp;