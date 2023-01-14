import quiz1img8 from "../Quiz/quiz1_img8.jpg";
import quiz1img5 from "../Quiz/quiz1_img5.jpg";
import quiz1img6 from "../Quiz/quiz1_img6.jpg";
import quiz1img10 from "../Quiz/quiz1_img10.jpg";
import quiz1img4 from "../Quiz/quiz1_img4.jpg";

const questions3 =[
    {
        numb:1,
        question:"Qual foi a percentagem de reciclagem e compostagem de Portugal em 2017?",
        imagem: quiz1img8,
        options:[ 
            
        {alineaKey:0,text: "80%",resposta:false},
        {alineaKey:1,text:"28%",resposta:true},
        {alineaKey:2,text:"50%",resposta:false},
        {alineaKey:3,text:"Nenhuma das opções anteriores.",resposta:false}    
    ]

    },

    {
        numb:2,
        question:"Qual destes  é um beneficio da compostagem comunitária?",
        imagem:quiz1img5,
        options: [

            {alineaKey:0,text:"Redução da percentagem de matéria orgânica que acaba nos aterros",resposta:false},
            {alineaKey:1,text:"Enriquecimento dos solos",resposta:true},
            {alineaKey:2,text: "Educação ambiental para todos envolvidos na sua manutenção",resposta:false},
            {alineaKey:3,text:"Todos acima mencionados",resposta:false}
    ]
    
    },

    {
        numb:3,
        question:"Qual foi a percentagem de deposição em aterros de Portugal em 2017?",
        imagem:quiz1img6,
        options:[ 
         {alineaKey:0,text:"50%",resposta:true},
         {alineaKey:1,text:"28%",resposta:false},
         {alineaKey:2,text:"80%",resposta:false},
         {alineaKey:3,text: "Nenhuma das anteriores",resposta:false}
    ]
 
    },

    {
        numb:4,
        question:"Até qual temperatura (Celsius) pode chegar a compostagem termofílica? ",
        imagem:quiz1img10,
        options: [
            {alineaKey:0,text:"Até 300 graus",resposta:false},
            {alineaKey:1,text:"Até 30 graus",resposta:false},
            {alineaKey:2,text:"Até 75 graus",resposta:true},
            {alineaKey:3,text:"Até 500 graus",resposta:false},
    ]
    },

    {
        numb:5,
        question:"Quanto tempo demora a compostagem termofílica?",
        imagem:quiz1img4,
        options: [
         {alineaKey:0,text:"3 anos",resposta:false},
         {alineaKey:1,text:"10 a 14 dias",resposta:false},
         {alineaKey:2,text:"2 semanas",resposta:false},
         {alineaKey:3,text:"3 a 4 meses",resposta:true},
    ]
}
]




export default questions3;