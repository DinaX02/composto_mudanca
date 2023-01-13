import React from "react";
import "./ConteudoHp.css";
import img1 from '../ConteudoHp/compostagem_img_1.png'
import img2 from '../ConteudoHp/bencom.png'
import img3 from '../ConteudoHp/comunity_img.png'

const ConteudoHp = () => {
  
  return (
    <div className="conteudohomepage" >
        <h1 className="espaaacoemcimahp">O que é compostagem?</h1>

        <section className="sectionajuste">
        <p className="p">
          Compostagem é o processo de biodegradação natural da matéria orgânica. Em outros termos, é a reciclagem dos resíduos orgânicos. O produto final deste processo é o adubo orgânico e o biofertilizante, sendo que este pode ser coletado e utilizado antes mesmo de concluída a compostagem.
        </p>

        <div className="div2img">
          <img className="img" src={img1}/>
          
        </div>

      </section>
        <h1>Benefícios da compostagem</h1>

        <section className="sectionajuste">
        <p className="p">
          A compostagem é a forma de desviar os resíduos orgânicos dos aterros sanitários e lixões, onde a  degradação ocorre de forma anaeróbia. Quando estes resíduos, que correspondem a cerca de 50% dos resíduos sólidos urbanos, são degradados sem a presença de oxigênio e misturados com outros resíduos e com rejeitos, são liberados gases do efeito estufa, como o gás metano.

          Aproximadamente 90% das emissões de gás metano são reduzidas quando os resíduos orgânicos são compostados em vez de serem encaminhados para o aterro sanitário ou lixão. Assim, a compostagem é uma importante ferramenta de combate às mudanças climáticas.
        </p>

        <div className="div2img">
        <img className="img2" src={img2}/>
        </div>
      </section><h1>
        O que é a Compostagem Comunitária
    </h1>
      <section className="sectionajuste">

        <p className="p">
          A compostagem comunitária é aquela feita por pequenas comunidades, as quais se organizam coletivamente e compartilham a responsabilidade pelos processos envolvidos na realização da compostagem e seus ganhos, desde a coleta dos resíduos até a distribuição e uso do húmus produzido.
        </p>

        <div className="div2img">
        <img className="img3" src={img3}/>
        </div>
      </section>
      <section>
        <h1 className="espacoultimafrase">
          Para usufruir da aplicação efetue <a id='login' href='./login'>login</a>
        </h1>

      </section>
    </div>
  );
};

export default ConteudoHp;
