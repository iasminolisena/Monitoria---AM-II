import { obterTarefas, salvarTarefas } from './storage.js';

export function renderizarLista() {
    const ul = document.getElementById('listaTarefas');
    const contador = document.getElementById('contador');
    const emptyState = document.getElementById('empty-state');

    const tarefas = obterTarefas();

    ul.innerHTML = '';

    contador.textContent =
        `${tarefas.length} tarefa${tarefas.length !== 1 ? 's' : ''}`;

    emptyState.style.display =
        tarefas.length === 0 ? 'block' : 'none';

    tarefas.forEach((tarefa, index) => {

        const li = document.createElement('li');
        li.className = 'tarefa-card';

        const span = document.createElement('span');
        span.className = 'tarefa-texto';
        span.textContent = tarefa;

        const divAcoes = document.createElement('div');
        divAcoes.className = 'tarefa-acoes';

        const btnEditar = document.createElement('button');
        btnEditar.className = 'btn btn-editar';
        btnEditar.textContent = '✏️ Editar';

        const btnExcluir = document.createElement('button');
        btnExcluir.className = 'btn btn-excluir';
        btnExcluir.textContent = '🗑️ Excluir';

        btnEditar.addEventListener('click', () => editar(index));
        btnExcluir.addEventListener('click', () => excluir(index));

        divAcoes.append(btnEditar, btnExcluir);
        li.append(span, divAcoes);

        ul.appendChild(li);
    });
}

function editar(index) {
    const tarefas = obterTarefas();

    const novaDescricao = prompt(
        'Editar tarefa:',
        tarefas[index]
    );

    if (
        novaDescricao === null ||
        novaDescricao.trim() === ''
    ) {
        return;
    }

    tarefas[index] = novaDescricao.trim();

    salvarTarefas(tarefas);
    renderizarLista();
}

function excluir(index) {
    const tarefas = obterTarefas();

    tarefas.splice(index, 1);

    salvarTarefas(tarefas);
    renderizarLista();
}
