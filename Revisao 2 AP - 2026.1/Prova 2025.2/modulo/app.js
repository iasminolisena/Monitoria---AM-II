import { obterTarefas, salvarTarefas } from './storage.js';
import { renderizarLista } from './dom.js';

// Guarda defensiva — garante que os elementos existem antes de usar
const form = document.getElementById('formTarefa');
const input = document.getElementById('descricao');

if (!form || !input) {
    console.error('app.js: #formTarefa ou #descricao não encontrado no DOM.');
} else {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const texto = input.value.trim();

        if (!texto) {
            alert('Digite uma tarefa!');
            input.focus(); // ← devolve foco pro campo após alerta
            return;
        }

        const tarefas = obterTarefas();
        tarefas.push(texto);
        salvarTarefas(tarefas);

        input.value = '';
        input.focus(); // ← UX: foco volta pro campo pra digitar a próxima tarefa

        renderizarLista();
    });
}

renderizarLista();
