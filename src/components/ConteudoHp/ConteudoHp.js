import React from "react";
import "./ConteudoHp.css";
import img1 from "../ConteudoHp/conteudo1.png";
import img2 from "../ConteudoHp/conteudo2.png";
import img3 from "../ConteudoHp/conteudo3.png";

const ConteudoHp = () => {
  return (
      <div>
        <div className="conteudohomepage">

          <section className="sectionajuste">
            <div className='texto1'>
              <h1 className="espaaacoemcimahp">Compostagem?</h1>
              <p className="p">
                Compostagem é a reciclagem dos resíduos orgânicos. O
                produto final deste processo é o adubo orgânico.
                Compostagem é a reciclagem dos resíduos orgânicos. O
                produto final deste processo é o adubo orgânico.
                Compostagem é a reciclagem dos resíduos orgânicos. O
                produto final deste processo é o adubo orgânico.
              </p>
            </div>
            <div className="div2img img1">
              <img className="img" src={require('./conteudo1.png')} width={'278px'} height={'278px'}/>
            </div>
          </section>

          <section className="sectionajuste sec2">

            <div className="div2img img2">
              <img className="img2" src={require('./conteudo2.png')} width={'278px'} height={'278px'}/>
            </div>
            <div className='texto2'>
              <h1 className='espaaacoemcimahp p2'>Salvar o Planeta</h1>
              <p className="p p2">
                A compostagem é uma importante ferramenta de combate às mudanças climáticas
                A compostagem é uma importante ferramenta de combate às mudanças climáticas
                A compostagem é uma importante ferramenta de combate às mudanças climáticas


              </p>
            </div>
          </section>


          <section className="sectionajuste">
            <div className='texto1'>
              <h1 className='espaaacoemcimahp'>Compostagem Comunitária</h1>
              <p className="p">
                A compostagem comunitária é aquela feita por pequenas comunidades,
                as quais se organizam e partilham a
                responsabilidade na realização da
                compostagem. responsabilidade na realização da
                compostagem. responsabilidade na realização da
                compostagem. responsabilidade na realização da
                compostagem.
              </p>
            </div>
            <div className="div2img img1">
              <img className="img3" src={require('./conteudo3.png')}/>
            </div>
          </section>
          <section>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 className="espacoultimafrase">
            Para usufruir da aplicação efetue{" "}
            <a id="login" href="./login">
              login
            </a>
          </h1>
        </section>
      </div>
    </div>
  );
};

export default ConteudoHp;
