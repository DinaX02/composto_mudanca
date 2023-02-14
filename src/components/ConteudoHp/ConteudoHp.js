import React from "react";
import "./ConteudoHp.css";
import { Link } from "react-router-dom";
import img1 from "../ConteudoHp/conteudo1.png";
import img2 from "../ConteudoHp/conteudo2.png";
import img3 from "../ConteudoHp/conteudo3.png";

const ConteudoHp = () => {
  return (
    <div>
      <div className="conteudohomepage">
        <section className="sectionajuste">
          <div className="texto1">
            <h1 className="espaaacoemcimahp">Compostagem?</h1>
            <p className="p">
              Compostagem é a reciclagem dos resíduos orgânicos, que dá nova
              vida à matéria orgânica. A compostagem comunitária costuma ser
              compostagem termofílica.
            </p>
          </div>
          <div className="div2img img1">
            <img
              className="img"
              src={require("./conteudo1.png")}
              width={"278px"}
              height={"278px"}
            />
          </div>
        </section>

        <section className="sectionajuste sec2">
          <div className="div2img img2">
            <img
              className="img2"
              src={require("./conteudo2.png")}
              width={"278px"}
              height={"278px"}
            />
          </div>
          <div className="texto2">
            <h1 className="espaaacoemcimahp p2">Salvar o Planeta</h1>
            <p className="p p2">
              A compostagem é uma importante ferramenta de combate às mudanças
              climáticas, para o enriquecimento dos solos, para a fixação de
              água e para impedir a quantidade de resíduos em aterros
              sanitários.
            </p>
          </div>
        </section>

        <section className="sectionajuste">
          <div className="texto1">
            <h1 className="espaaacoemcimahp">Compostagem Comunitária</h1>
            <p className="p">
              A compostagem comunitária é aquela feita por pequenas comunidades,
              as quais se organizam e partilham a responsabilidade na realização
              da compostagem. Através da nossa aplicação, nunca foi tão fácil
              fazer compostagem
            </p>
          </div>
          <div className="div2img img1">
            <img className="img3" src={require("./conteudo3.png")} />
          </div>
        </section>
        
        <div className="imagem_hp_wave">
        <div className="waves_hpp spaceWaves"></div>
          <div className="titulo_img_wavy">
            <h1 className="cor_titulo_img_wavy">Começa hoje</h1>
          </div>
         <Link to={"/signup"}><button className="btn_img_wavy">Sign up</button></Link> 
        </div>
        
      </div>
    </div>
  );
};

export default ConteudoHp;
