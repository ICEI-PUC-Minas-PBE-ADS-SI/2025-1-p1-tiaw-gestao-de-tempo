// Lista dos dias da semana
const diasSemana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

// Estrutura local de tarefas
const tarefas = {
  dom: [], seg: [], ter: [], qua: [], qui: [], sex: [], sab: []
};

// Gerador de ID único
let contadorId = 0;
function gerarIdUnico() {
  return Date.now() + contadorId++;
}

// Ao carregar a página, busca tarefas do json-server
window.onload = async function () {
  try {
    const res = await fetch('http://localhost:3000/tarefa');
    const todas = await res.json();

    todas.forEach(tarefa => {
      if (tarefas[tarefa.dia]) {
        tarefas[tarefa.dia].push(tarefa);
      }
    });

    mostrarTodasTarefas();
  } catch (e) {
    console.error('Erro ao carregar tarefas:', e);
  }
};

// Adiciona uma nova tarefa no dia correspondente
function addTask(dia) {
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
    id: gerarIdUnico(),
    nome,
    inicio,
    fim,
    necessario,
    obs,
    dia
  };

  tarefas[dia].push(nova);

  // Limpa os campos do formulário
  document.getElementById(`${dia}-task`).value = '';
  document.getElementById(`${dia}-obs`).value = '';
  document.getElementById(`${dia}-necessary`).checked = false;

  mostrarTarefas(dia);
}

// Exibe tarefas na tela de um dia específico
function mostrarTarefas(dia) {
  const lista = document.getElementById(`${dia}-tasks`);
  let html = '';

  tarefas[dia].forEach((t, i) => {
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
        <button onclick="deletarTarefa('${dia}', ${i})" class="mt-3 btn-danger text-white font-medium py-2 px-4 rounded-lg text-sm w-full">
          <i class="fas fa-trash mr-2"></i>Excluir
        </button>
      </div>`;
  });

  lista.innerHTML = html;
}

// Exibe todas as tarefas da semana
function mostrarTodasTarefas() {
  diasSemana.forEach(d => mostrarTarefas(d));
}

// Remove uma tarefa localmente (não do json-server ainda)
function deletarTarefa(dia, index) {
  if (!confirm('Deseja realmente excluir esta tarefa?')) return;
  tarefas[dia].splice(index, 1);
  mostrarTarefas(dia);
}

// Salva todas as tarefas no json-server
async function salvarTarefas() {
  try {
    // 1. Buscar tarefas existentes
    const res = await fetch('http://localhost:3000/tarefa');
    const existentes = await res.json();

    // 2. Apagar todas do json-server
    await Promise.all(existentes.map(t =>
      fetch(`http://localhost:3000/tarefa/${t.id}`, {
        method: 'DELETE'
      })
    ));

    // 3. Enviar as novas tarefas
    await Promise.all(
      diasSemana.flatMap(dia =>
        tarefas[dia].map(tarefa =>
          fetch('http://localhost:3000/tarefa', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tarefa)
          })
        )
      )
    );

    // 4. Redireciona
    window.location.href = 'index.html';

  } catch (error) {
    alert('Erro ao salvar tarefas.');
    console.error(error);
  }
}
