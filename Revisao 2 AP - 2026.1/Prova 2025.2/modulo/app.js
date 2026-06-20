import { obterTarefas, salvarTarefas } from './storage.js';
import { renderizarLista } from './dom.js';

const form = document.getElementById('formTarefa');
const input = document.getElementById('descricao');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const texto = input.value.trim();

    if (!texto) { alert('Digite uma tarefa!'); return; };

    const tarefas = obterTarefas();

    tarefas.push(texto);

    salvarTarefas(tarefas);

    input.value = '';

    renderizarLista();
});

renderizarLista();
