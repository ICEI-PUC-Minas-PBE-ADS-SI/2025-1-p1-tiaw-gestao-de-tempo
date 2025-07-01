
async function verificarLogin() {
  const userId = sessionStorage.getItem("userId");

  if (!userId) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "signin.html";
    return;
  }
  
  try {
    const response = await fetch(`http://localhost:3000/usuarios`);
    if (!response.ok) throw new Error("Erro ao acessar usuários");
    
    const usuarios = await response.json();
    const user = usuarios.find(u => u.id === Number(userId));
    
    if (!user) throw new Error("Usuário não encontrado");
    
    document.querySelector("#logado").innerHTML = `Olá ${user.nome}`;
  } catch (error) {
    alert("Sessão inválida. Faça login novamente.");
    window.location.href = "signin.html";
  }
}

window.onload = verificarLogin;

function logout() {
  sessionStorage.removeItem("userId");
  window.location.href = "signin.html";
}