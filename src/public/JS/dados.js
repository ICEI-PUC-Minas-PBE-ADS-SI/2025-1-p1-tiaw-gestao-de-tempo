//tools
function gebiTOTAL(x,y,z){
    let show=document.getElementById(x).textContent
    let show2=document.getElementById(y).textContent 
    let show3=document.getElementById(z).textContent 
 
    return +show + +show2 + +show3   //DICA INSANA: COLOCAR UM + ANTES DA VARIAVEL FORÇA ELA A SE
                                     //TRANSFORMAR EM INT
}
function gebiTXT(x,y){
    document.getElementById(x).textContent=y
}


//ELEMENTOS:
const tasks=[{
    "TempoDecorrido":{
        nome: "Tempo Decorrido",
        peso: 10
    },
    "Default":{
        nome: "Tarefa Concluída",
        peso: 1
    },
    "Desempenho":{
        nome: "Desempenho",
        peso: 50
    }
    
}]



