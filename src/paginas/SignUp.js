import React from "react";
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import './SignUp.css';
import Footer from "../components/Footer/Footer";

const SignUp = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <section>
        <h1 className="titulo espacoinic">Professor Faz:</h1>
        <p className="textalign espacofim">
          Perferendis, eum. Necessitatibus cum illo, quos iste, pariatur ipsa
          eveniet beatae quisquam ullam aut dolore doloremque odit minus fuga
          esse suscipit maxime dolores? Placeat, maxime quas labore facere
          molestias nam.
          
        </p>
        <h1 className="titulo">Aluno Faz:</h1>
        <p className="textalign espacofim">
          Fuga repudiandae rerum laborum odit repellendus possimus, aut omnis
          velit, tempora pariatur ullam quo fugiat unde cumque neque dolorem
          quod corporis nam, perferendis dolores blanditiis! Soluta officia quam
          ex enim?
        </p>
        </section>
        <Footer/>
    </div>
  );
};

export default SignUp;
