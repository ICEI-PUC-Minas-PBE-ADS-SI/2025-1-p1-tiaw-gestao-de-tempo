const dados = [
  {
    "id": 0,
    "usuario": "usuário_1",
    "foto": "imagem_perfil.jpg",
    
  },
  {
    "id": 1,
    "usuario": "usuário_2",
    "foto": "imagem_perfil.jpg",
    
  },
  {
    "id": 2,
    "usuario": "usuário_3",
    "foto": "imagem_perfil.jpg",
  } 
]

function chats(x, y) {
  document.getElementById(x).href = y
}

chats("chat0", "Pagina_De_Conversa.html?id=0")
chats("chat1", "Pagina_De_Conversa.html?id=1")
chats("chat2", "Pagina_De_Conversa.html?id=2")