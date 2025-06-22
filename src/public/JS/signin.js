let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

async function entrar() {
  const usuario = document.querySelector("#usuario").value;
  const senha = document.querySelector("#senha").value;
  const msgError = document.querySelector("#msgError");

  try {
    const response = await fetch(`http://localhost:3000/usuarios?user=${usuario}&senha=${senha}`);
    const users = await response.json();

    if (users.length === 1) {
      const user = users[0];

      // Redireciona com ID do usuário na URL (simulação de sessão)
      window.location.href = `tarefas.html?userid=${user.id}`;
    } else {
      msgError.style.display = "block";
      msgError.innerHTML = "Usuário ou senha incorretos";
    }
  } catch (error) {
    msgError.style.display = "block";
    msgError.innerHTML = "Erro na requisição";
  }
}
