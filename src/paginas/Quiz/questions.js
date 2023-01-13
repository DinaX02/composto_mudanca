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
        question:"O Lixo Marinho é composto principalmente por:",
        imagem:quiz1img3,
        options:[ 
         {alineaKey:0,text:"Papel/Cartão.",resposta:false},
         {alineaKey:1,text:"Metal",resposta:true},
         {alineaKey:2,text:"Vidro",resposta:false},
         {alineaKey:3,text: "Plástico",resposta:false}
    ]
 
    },

    {
        numb:4,
        question:"O Plástico representa cerca de ____% do lixo marinho a nível global.",
        imagem:quiz1img4,
        options: [
            {alineaKey:0,text:"10%",resposta:false},
            {alineaKey:1,text:"40%",resposta:false},
            {alineaKey:2,text:"60%",resposta:true},
            {alineaKey:3,text:"70%",resposta:false},
    ]
    },

    {
        numb:5,
        question:"Porque é que o plástico é perigoso para a vida marinha?",
        imagem:quiz1img5,
        options: [
         {alineaKey:0,text:"Os animais confundem-no com as suas presas, o que pode conduzir a danos severos no trato gastro-intestinal ou até levar à morte.",resposta:false},
         {alineaKey:1,text:"Os animais podem ficar emaranhados, o que lhes pode dificultar a natação e/ou amputar membros.",resposta:false},
         {alineaKey:2,text:"Todas as opções a cima estão corretas.",resposta:false},
         {alineaKey:3,text:"Nenhuma das opções estão corretas.",resposta:true},
    ]
}
]




export default questions1;