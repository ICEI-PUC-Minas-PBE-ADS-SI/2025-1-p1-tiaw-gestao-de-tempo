const diasSemana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

// Carrega tarefas ao iniciar
window.onload = mostrarTodasTarefas;

// Adiciona tarefa diretamente no JSON-Server
async function addTask(dia) {
  const nome = document.getElementById(`${dia}-task`).value;
  const inicio = document.getElementById(`${dia}-start`).value;
  const fim = document.getElementById(`${dia}-end`).value;
  const necessario = document.getElementById(`${dia}-necessary`).checked;
  const obs = document.getElementById(`${dia}-obs`).value;

  if (nome.trim() === '') {
    alert('Digite o nome da tarefa!');
    return;
  }

  const nova = {
    nome,
    inicio,
    fim,
    necessario,
    obs,
    dia
  };

  try {
    await fetch('http://localhost:3000/tarefa', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nova)
    });
    mostrarTarefas(dia);
  } catch (e) {
    console.error('Erro ao adicionar tarefa:', e);
  }

  // Limpa os campos
  document.getElementById(`${dia}-task`).value = '';
  document.getElementById(`${dia}-obs`).value = '';
  document.getElementById(`${dia}-necessary`).checked = false;
}

// Mostra as tarefas de um dia específico
async function mostrarTarefas(dia) {
  try {
    const res = await fetch(`http://localhost:3000/tarefa?dia=${dia}`);
    const tarefas = await res.json();

    const lista = document.getElementById(`${dia}-tasks`);
    let html = '';

    tarefas.forEach(t => {
      const badge = t.necessario
        ? '<span class="necessary-badge text-white text-xs font-semibold px-3 py-1 rounded-full">Necessário</span>'
        : '<span class="not-necessary-badge text-white text-xs font-semibold px-3 py-1 rounded-full">Opcional</span>';

      html += `
        <div class="task-card-gradient border border-gray-200 rounded-xl p-4 shadow-sm card-hover">
          <div class="flex justify-between items-start mb-3">
            <h4 class="font-semibold text-gray-800 text-sm flex-1">${t.nome}</h4>
            ${badge}
          </div>
          <div class="space-y-2 text-sm text-gray-600">
            <p class="flex items-center gap-2"><i class="fas fa-clock w-4"></i><span>${t.inicio} até ${t.fim}</span></p>
            ${t.obs ? `<p class="flex items-center gap-2"><i class="fas fa-sticky-note w-4"></i><span>${t.obs}</span></p>` : ''}
          </div>
          <button onclick="deletarTarefa(${t.id}, '${dia}')" class="mt-3 btn-danger text-white font-medium py-2 px-4 rounded-lg text-sm w-full">
            <i class="fas fa-trash mr-2"></i>Excluir
          </button>
        </div>`;
    });

    lista.innerHTML = html;
  } catch (e) {
    console.error(`Erro ao carregar tarefas de ${dia}:`, e);
  }
}

// Mostra todas as tarefas da semana
function mostrarTodasTarefas() {
  diasSemana.forEach(dia => mostrarTarefas(dia));
}

// Deleta uma tarefa no servidor
async function deletarTarefa(id, dia) {
  if (!confirm('Deseja realmente excluir esta tarefa?')) return;

  try {
    await fetch(`http://localhost:3000/tarefa/${id}`, { method: 'DELETE' });
    mostrarTarefas(dia);
  } catch (e) {
    console.error('Erro ao excluir tarefa:', e);
  }
}

// Não precisa mais de , pois as ações são
function salvarTarefas(){
  location.href = "index.html";
}