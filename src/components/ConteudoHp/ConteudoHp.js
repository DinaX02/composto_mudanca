import React from "react";
import "./ConteudoHp.css";
import img1 from '../ConteudoHp/compostagem_img_1.png'
import img2 from '../ConteudoHp/bencom.png'
import img3 from '../ConteudoHp/comunity_img.png'

const ConteudoHp = () => {
  
  return (
    <div className="conteudohomepage">
      <section>
        <h1>O que é compostagem?</h1>
        <p>
          Perferendis, eum. Necessitatibus cum illo, quos iste, pariatur ipsa
          eveniet beatae quisquam ullam aut dolore doloremque odit minus fuga
          esse suscipit maxime dolores? Placeat, maxime quas labore facere
          molestias nam Perferendis, eum. Necessitatibus cum illo, quos iste, pariatur ipsa
          eveniet beatae quisquam ullam aut dolore doloremque odit minus fuga
          esse Placeat, maxime quas labore facere
          molestias nam Perferendis, eum. Necessitatibus cum illo, quos iste, pariatur ipsa
          eveniet beatae quisquam ullam aut dolore doloremque odit minus fuga
          ess.
        </p>

        <div className="div2img">
          <img className="img" src={img1}/>
        </div>

      </section>
      <section>
        <h1>Benefícios da compostagem</h1>
        <p>
          Fuga repudiandae rerum laborum odit repellendus possimus, aut omnis
          velit, tempora pariatur ullam quo fugiat unde cumque neque dolorem
          quod corporis nam, perferendis dolores blanditiis! Soluta officia quam
          ex enim?
        </p>

        <div className="div2img">
        <img className="img2" src={img2}/>
        </div>
      </section>
      <section>
        <h1>
          O que é a Compostagem Comunitária
        </h1>
        <p>
          Ad sit eos omnis accusantium quasi perspiciatis inventore aliquam.
          Quisquam, rerum expedita? Et, recusandae aliquam. Ratione dicta error,
          vitae soluta iste consectetur itaque voluptatem fugit ipsam cum,
          accusantium illum quod.
        </p>

        <div className="div2img">
        <img className="img3" src={img3}/>
        </div>
      </section>
      <section>
        <h1 className="espacoultimafrase">
          Para usufruir da aplicação efetue login
        </h1>
      </section>
    </div>
  );
};

export default ConteudoHp;
