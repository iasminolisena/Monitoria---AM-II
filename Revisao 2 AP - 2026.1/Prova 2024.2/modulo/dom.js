import { obterLeituras, salvarLeituras } from './storage.js';

export function renderizar() {
  const lista = obterLeituras();

  const ul = document.getElementById('lista-leituras');
  const contador = document.getElementById('contador');
  const emptyState = document.getElementById('empty-state');

  ul.innerHTML = '';

  contador.textContent =
    `${lista.length} ${lista.length === 1 ? 'registro' : 'registros'}`;

  emptyState.style.display =
    lista.length === 0 ? 'flex' : 'none';

  lista.forEach((leitura, index) => {
    const li = document.createElement('li');
    li.classList.add('card-leitura');

    li.innerHTML = `
      <div class="card-conteudo">
        <h3>${leitura.titulo}</h3>
        <p><strong>Autor:</strong> ${leitura.autor}</p>
        <p><strong>Data de Início:</strong> ${leitura.data}</p>
        <p><strong>Status:</strong> ${leitura.status}</p>
      </div>

      <div class="card-acoes">
        <button class="btn-editar">✏️ Editar</button>
        <button class="btn-remover">🗑️ Remover</button>
      </div>
    `;

    const btnEditar = li.querySelector('.btn-editar');
    const btnRemover = li.querySelector('.btn-remover');

    btnEditar.addEventListener('click', () => editar(index));
    btnRemover.addEventListener('click', () => remover(index));

    ul.appendChild(li);
  });
}

function editar(index) {
  const lista = obterLeituras();
  const leitura = lista[index];

  const novoTitulo = prompt('Título:', leitura.titulo);
  if (novoTitulo === null) return;

  const novoAutor = prompt('Autor:', leitura.autor);
  if (novoAutor === null) return;

  const novaData = prompt('Data de Início:', leitura.data);
  if (novaData === null) return;

  const novoStatus = prompt(
    'Status (Em andamento ou Concluída):',
    leitura.status
  );
  if (novoStatus === null) return;

  lista[index] = {
    titulo: novoTitulo.trim(),
    autor: novoAutor.trim(),
    data: novaData.trim(),
    status: novoStatus.trim()
  };

  salvarLeituras(lista);
  renderizar();
}

function remover(index) {
  const lista = obterLeituras();

  const confirmar = confirm(
    'Tem certeza que deseja remover esta leitura?'
  );

  if (!confirmar) return;

  lista.splice(index, 1);

  salvarLeituras(lista);
  renderizar();
}
