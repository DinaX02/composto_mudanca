import quiz1img1 from "../Quiz/quiz1_img1.jpg";
import quiz1img2 from "../Quiz/quiz1_img2.jpg";
import quiz1img3 from "../Quiz/quiz1_img3.jpg";
import quiz1img4 from "../Quiz/quiz1_img4.jpg";
import quiz1img5 from "../Quiz/quiz1_img5.jpg";

const questions3 =[
    {
        numb:1,
        question:"Qual foi a percentagem de reciclagem e compostagem de Portugal em 2017?",
        imagem: quiz1img1,
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
        imagem:quiz1img2,
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
        imagem:quiz1img3,
        options:[ 
         {alineaKey:0,text:"50%",resposta:true},
         {alineaKey:1,text:"28%",resposta:false},
         {alineaKey:2,text:"80%",resposta:false},
         {alineaKey:3,text: "Nenhuma das anteriores",resposta:false}
    ]
 
    },

    {
        numb:4,
        question:"Qual destas é a cor do novo ecoponto de matéria orgânica?",
        imagem:quiz1img4,
        options: [
            {alineaKey:0,text:"",resposta:false},
            {alineaKey:1,text:"",resposta:false},
            {alineaKey:2,text:"",resposta:true},
            {alineaKey:3,text:"",resposta:false},
    ]
    },

    {
        numb:5,
        question:"",
        imagem:quiz1img5,
        options: [
         {alineaKey:0,text:"",resposta:false},
         {alineaKey:1,text:"",resposta:false},
         {alineaKey:2,text:"",resposta:false},
         {alineaKey:3,text:"",resposta:true},
    ]
}
]




export default questions3;