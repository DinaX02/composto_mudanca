import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import ConteudoHp from "../components/ConteudoHp/ConteudoHp";
import Footer from "../components/Footer/Footer";
const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <ConteudoHp/>
        <Footer/>
    </div>
  );
};

export default Homepage;