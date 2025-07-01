//tools
function clearBoxes(){
    gebiTXT('b1r1','')
    gebiTXT('b1r2','')
    gebiTXT('b1r3','')

    gebiTXT('b2r1','')
    gebiTXT('b2r2','')
    gebiTXT('b2r3','')

    gebiTXT('b3r1','')
    gebiTXT('b3r2','')
    gebiTXT('b3r3','')

    gebiTXT('b1q1','')
    gebiTXT('b1q1','')
    gebiTXT('b1q1','')

    gebiTXT('b2q1','')
    gebiTXT('b2q1','')
    gebiTXT('b2q1','')

    gebiTXT('b3q1','')
    gebiTXT('b3q1','')
    gebiTXT('b3q1','')
}


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



