// Alternar visualização da senha
let btn = document.querySelector('.fa-eye');
btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha');
  if (inputSenha.getAttribute('type') === 'password') {
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
});

// Função de login
async function entrar() {
  const usuario = document.querySelector("#usuario").value;
  const senha = document.querySelector("#senha").value;
  const msgError = document.querySelector("#msgError");

  if (!usuario || !senha) {
    msgError.style.display = "block";
    msgError.innerHTML = "Preencha todos os campos.";
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/usuarios?user=${usuario}&senha=${senha}`);
    const users = await response.json();

    if (users.length === 1) {
      const user = users[0];

      // ✅ Armazena o ID do usuário logado na sessão
      sessionStorage.setItem("userId", user.id);

      // ✅ Redireciona para página principal
      window.location.href = "tarefas.html";
    } else {
      msgError.style.display = "block";
      msgError.innerHTML = "Usuário ou senha incorretos";
    }
  } catch (error) {
    msgError.style.display = "block";
    msgError.innerHTML = "Erro ao conectar com o servidor";
  }
}
