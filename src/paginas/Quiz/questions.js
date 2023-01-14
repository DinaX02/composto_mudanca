import quiz1img1 from "../Quiz/quiz1_img1.jpg";
import quiz1img2 from "../Quiz/quiz1_img2.jpg";
import quiz1img3 from "../Quiz/quiz1_img3.jpg";
import quiz1img4 from "../Quiz/quiz1_img4.jpg";
import quiz1img5 from "../Quiz/quiz1_img5.jpg";

const questions1 =[
    {
        numb:1,
        question:"Existem dois tipos de Compostagem: a _______ e a ________.",
        imagem: quiz1img1,
        options:[ 
            
        {alineaKey:0,text: "Compostagem Exótica e Vermicompostagem.",resposta:false},
        {alineaKey:1,text:"Vermicompostagem e compostagem termofílica",resposta:true},
        {alineaKey:2,text:"Compostagem termofílica e Compostagem Exótica",resposta:false},
        {alineaKey:3,text:"Nenhuma das opções anteriores.",resposta:false}    
    ]

    },

    {
        numb:2,
        question:"Quais são as 3 consequências do despejo inadequado do resíduo orgânico?",
        imagem:quiz1img2,
        options: [

            {alineaKey:0,text:"...",resposta:false},
            {alineaKey:1,text:"Contaminação dos lençóis freáticos, a atração de vetores causadores de doenças e a emissão de gases causadores do aquecimento mundial",resposta:true},
            {alineaKey:2,text: "Não existem consequências.",resposta:false},
            {alineaKey:3,text:"Aumento do Aquecimento .... ",resposta:false}
    ]
    
    },

    {
        numb:3,
        question:"Quais destas não é uma consequência do despejo inadequado de matéria orgânica?",
        imagem:quiz1img3,
        options:[ 
         {alineaKey:0,text:"Aumento da riqueza do solo",resposta:true},
         {alineaKey:1,text:"Libertação de gases com efeito de estufa",resposta:false},
         {alineaKey:2,text:"Atração de vetores causadores de doenças",resposta:false},
         {alineaKey:3,text: "Contaminação dos lenços freáticos",resposta:false}
    ]
 
    },

    {
        numb:4,
        question:"Qual destas é a cor do novo ecoponto de matéria orgânica?",
        imagem:quiz1img4,
        options: [
            {alineaKey:0,text:"Azul",resposta:false},
            {alineaKey:1,text:"Amarelo",resposta:false},
            {alineaKey:2,text:"Castanho",resposta:true},
            {alineaKey:3,text:"Verde",resposta:false},
    ]
    },

    {
        numb:5,
        question:"Qual destes não é um fenômeno do processo de compostagem?",
        imagem:quiz1img5,
        options: [
         {alineaKey:0,text:"Sedimentação",resposta:false},
         {alineaKey:1,text:"Fermentação",resposta:false},
         {alineaKey:2,text:"Decomposição",resposta:false},
         {alineaKey:3,text:"Liquidificação",resposta:true},
    ]
}
]




export default questions1;