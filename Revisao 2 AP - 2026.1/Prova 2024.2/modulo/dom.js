import { obterLeituras, salvarLeituras } from './storage.js';

export function renderizar() {
  const ul = document.getElementById('listaLeituras');
  ul.innerHTML = '';  // limpa antes de redesenhar

  obterLeituras().forEach((leitura, index) => {
    const li         = document.createElement('li');
    const btnEditar  = document.createElement('button');
    const btnRemover = document.createElement('button');

    li.innerHTML = `
      <strong>${leitura.titulo}</strong><br>
      Autor: ${leitura.autor}<br>
      Data de Início: ${leitura.data}<br>
      Status: ${leitura.status}
    `;

    btnEditar.textContent  = 'Editar';
    btnRemover.textContent = 'Remover';

    btnEditar.addEventListener('click', () => editar(index));
    btnRemover.addEventListener('click', () => remover(index));

    li.append(btnEditar, btnRemover);
    ul.appendChild(li);
  });
}

function editar(index) {
  const lista = obterLeituras();
  const l = lista[index];
  const novoTitulo = prompt('Título:',  l.titulo);
  if (novoTitulo === null) return;  // cancelou
  lista[index] = {
    titulo: novoTitulo.trim(),
    autor:  prompt('Autor:',  l.autor).trim(),
    data:   prompt('Data:',   l.data).trim(),
    status: prompt('Status (Em andamento / Concluída):', l.status).trim()
  };
  salvarLeituras(lista);
  renderizar();
}

function remover(index) {
  const lista = obterLeituras();
  lista.splice(index, 1);  // remove 1 item na posição index
  salvarLeituras(lista);
  renderizar();
}
