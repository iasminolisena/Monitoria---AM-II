import { obterTarefas, salvarTarefas } from './storage.js';

export function renderizarLista() {
  const ul = document.getElementById('listaTarefas');
  ul.innerHTML = '';  // limpa antes de redesenhar

  obterTarefas().forEach((tarefa, index) => {
    const li         = document.createElement('li');
    const span       = document.createElement('span');
    const btnEditar  = document.createElement('button');
    const btnExcluir = document.createElement('button');

    span.textContent      = tarefa;
    btnEditar.textContent  = 'Editar';
    btnExcluir.textContent = 'Excluir';

    btnEditar.addEventListener('click', () => editar(index));
    btnExcluir.addEventListener('click', () => excluir(index));

    li.append(span, btnEditar, btnExcluir);
    ul.appendChild(li);
  });
}

function editar(index) {
  const lista = obterTarefas();
  const novo = prompt('Editar tarefa:', lista[index]);
  if (novo === null || !novo.trim()) return;
  lista[index] = novo.trim();
  salvarTarefas(lista);
  renderizarLista();
}

function excluir(index) {
  const lista = obterTarefas();
  lista.splice(index, 1);  // remove 1 item na posição index
  salvarTarefas(lista);
  renderizarLista();
}
