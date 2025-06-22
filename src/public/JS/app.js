function setFundo(modo) {
    if (modo === "claro") {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
    } else if (modo === "escuro") {
        document.body.style.backgroundColor = "#696969";
        document.body.style.color = "#ffffff";
    }

    localStorage.setItem("modoFundo", modo);
}

function setCorPrincipal(cor) {
    const botoes = document.querySelectorAll(".buttons button");
    const header = document.querySelector("header");

    botoes.forEach(botao => {
        botao.style.backgroundColor = cor;
        botao.style.color = (cor === "black") ? "white" : "black";
    });

    header.style.background = cor;
    header.style.color = (cor === "black") ? "white" : "black";

    localStorage.setItem("corPrincipal", cor);
}

function restaurarPadrao() {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";

    const botoes = document.querySelectorAll(".buttons button");
    botoes.forEach(botao => {
        botao.style.backgroundColor = "steelblue";
        botao.style.color = "black";
    });

    const header = document.querySelector("header");
    header.style.background = "linear-gradient(to right, purple, steelblue)";
    header.style.color = "black";

    document.getElementById("fundoSelect").value = "";
    document.getElementById("corSelect").value = "";

    localStorage.removeItem("modoFundo");
    localStorage.removeItem("corPrincipal");
}

function aplicarConfiguracoesSalvas() {
    const fundo = localStorage.getItem("modoFundo");
    const cor = localStorage.getItem("corPrincipal");

    if (fundo) setFundo(fundo);
    if (cor) setCorPrincipal(cor);
}

function editarPerfil() {
    alert("Função de edição de perfil ainda será implementada.");
}

function editarDadosConta() {
    alert("Função de edição dos dados da conta ainda será implementada.");
}

// Aplica configs ao carregar a página
window.onload = aplicarConfiguracoesSalvas;


function volta() {
    location.href = "index.html";
}