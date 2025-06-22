const tasks=[{
    "task1": "Tempo Decorrido",
    "task2": "Desempenho",
    "task3": "Tarefa Concluída",
}]
let dados=[{
    "t_concluida": "t_concluida",
    "horas": "horas",
    "segundos":"segundos",
    "combo": "combo",
}]

let imput1=3, imput2=2,imput3=2.
function registration(){
localStorage.setItem(dados[0].horas, imput1)
localStorage.setItem(dados[0].t_concluida, imput2)
localStorage.setItem(dados[0].combo, imput3)}

registration()
store1()
registration()
store2()
registration()
store3()

function store1(){ 
        horasqnt1=localStorage.getItem("horas"),
        comboqnt1=localStorage.getItem("combo"),
        t_concluidaqnt1=localStorage.getItem("t_concluida");
        localStorage.removeItem(dados[0].horas)
        localStorage.removeItem(dados[0].t_concluida)
        localStorage.removeItem(dados[0].combo)
}

function store2(){
        horasqnt2=localStorage.getItem("horas"),
        comboqnt2=localStorage.getItem("combo"),
        t_concluidaqnt2=localStorage.getItem("t_concluida");
        localStorage.removeItem(dados[0].horas)
        localStorage.removeItem(dados[0].t_concluida)
        localStorage.removeItem(dados[0].combo)
}

function store3(){
    horasqnt3=localStorage.getItem("horas"),
    comboqnt3=localStorage.getItem("combo"),
    t_concluidaqnt3=localStorage.getItem("t_concluida");
    localStorage.removeItem(dados[0].horas)
    localStorage.removeItem(dados[0].t_concluida)
    localStorage.removeItem(dados[0].combo)
}

