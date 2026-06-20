import { obterTarefas, salvarTarefas } from './storage.js';
import { renderizarLista }             from './dom.js';

const input = document.getElementById('inputTarefa');
const btn   = document.getElementById('btnAdicionar');

btn.addEventListener('click', () => {
  const texto = input.value.trim();
  if (!texto) { alert('Digite uma tarefa!'); return; }

  const lista = obterTarefas();
  lista.push(texto);
  salvarTarefas(lista);

  input.value = '';
  renderizarLista();
});

// Ao carregar a página, exibe as tarefas salvas
renderizarLista();
