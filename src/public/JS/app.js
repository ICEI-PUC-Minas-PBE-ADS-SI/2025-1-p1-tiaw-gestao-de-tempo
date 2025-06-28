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
    const idUsuarioAtual = sessionStorage.getItem("userId");

    if (!idUsuarioAtual) {
        alert("Você precisa estar logado para editar o perfil.");
        window.location.href = "signin.html";
        return;
    }

    fetch(`http://localhost:3000/usuarios/${idUsuarioAtual}`)
        .then(res => res.json())
        .then(usuario => {
            document.getElementById("nomePerfil").value = usuario.nome || "";
            document.getElementById("userPerfil").value = usuario.user || "";
            document.getElementById("senhaPerfil").value = usuario.senha || "";

            document.getElementById("modalPerfil").style.display = "block";
        })
        .catch(err => {
            alert("Erro ao carregar perfil: " + err);
        });

        // Enviar PUT ao salvar alterações
document.getElementById("formPerfil").addEventListener("submit", async function (e) {
  e.preventDefault();

  const idUsuarioAtual = sessionStorage.getItem("userId");
  if (!idUsuarioAtual) {
    alert("Você não está logado!");
    window.location.href = "signin.html";
    return;
  }

  const dadosAtualizados = {
    nome: document.getElementById("nomePerfil").value,
    user: document.getElementById("userPerfil").value,
    senha: document.getElementById("senhaPerfil").value
  };

  try {
    const resposta = await fetch(`http://localhost:3000/usuarios/${idUsuarioAtual}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dadosAtualizados)
    });

    if (!resposta.ok) throw new Error("Erro ao atualizar");

    alert("Perfil atualizado com sucesso!");
    fecharModalPerfil();
  } catch (erro) {
    alert("Erro ao salvar alterações: " + erro.message);
  }
});
}



function fecharModalPerfil() {
    document.getElementById("modalPerfil").style.display = "none";
}


function editarDadosConta() {
    location.href = "tarefas.html"
}

// Aplica configs ao carregar a página
window.onload = aplicarConfiguracoesSalvas;


function volta() {
    location.href = "index.html";
}