import quiz1img1 from "../Quiz/quiz1_img1.jpg";
import quiz1img2 from "../Quiz/quiz1_img2.jpg";
import quiz1img3 from "../Quiz/quiz1_img3.jpg";
import quiz1img4 from "../Quiz/quiz1_img4.jpg";
import quiz1img5 from "../Quiz/quiz1_img5.jpg";

const questions2 =[
    {
        numb:1,
        question:"O que não se deve colocar no compostor comunitário?",
        imagem: quiz1img1,
        options:[ 
            
        {alineaKey:0,text: "Borras de café e filtros de café usados",resposta:false},
        {alineaKey:1,text:"Matéria podre",resposta:true},
        {alineaKey:2,text:"Folhas secas",resposta:false},
        {alineaKey:3,text:"Restos de matéria orgânica não cozida",resposta:false}    
    ]

    },

    {
        numb:2,
        question:"Qual destes é uma etapa da compostagem comunitária?",
        imagem:quiz1img2,
        options: [

            {alineaKey:0,text:"Humificação",resposta:false},
            {alineaKey:1,text:"Homogeneização",resposta:false},
            {alineaKey:2,text: "Fermentação",resposta:false},
            {alineaKey:3,text:"Todos acima mencionados",resposta:true}
    ]
    
    },

    {
        numb:3,
        question:"Qual destes podes colocar no compostor comunitário?",
        imagem:quiz1img3,
        options:[ 
         {alineaKey:0,text:"Borras de Café",resposta:true},
         {alineaKey:1,text:"Dejetos de cão",resposta:false},
         {alineaKey:2,text:"Arroz cozido",resposta:false},
         {alineaKey:3,text: "Carne",resposta:false}
    ]
 
    },

    {
        numb:4,
        question:"Qual é a média de resíduo orgânico que é gerado por dia por cada pessoa?",
        imagem:quiz1img4,
        options: [
            {alineaKey:0,text:"5g",resposta:false},
            {alineaKey:1,text:"100g",resposta:false},
            {alineaKey:2,text:"520g",resposta:true},
            {alineaKey:3,text:"25g",resposta:false},
    ]
    },

    {
        numb:5,
        question:"Qual destes não podes compostar?",
        imagem:quiz1img5,
        options: [
         {alineaKey:0,text:"Folhas Secas",resposta:false},
         {alineaKey:1,text:"Casca de ovo",resposta:false},
         {alineaKey:2,text:"Fruta",resposta:false},
         {alineaKey:3,text:"Óleo de girassol",resposta:true},
    ]
}
]




export default questions2;