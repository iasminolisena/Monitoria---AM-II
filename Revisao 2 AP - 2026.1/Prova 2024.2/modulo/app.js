import { obterLeituras, salvarLeituras } from './storage.js';
import { renderizar }                   from './dom.js';

const btn = document.getElementById('btnAdicionar');

btn.addEventListener('click', () => {
  const titulo = document.getElementById('titulo').value.trim();
  const autor  = document.getElementById('autor').value.trim();
  const data   = document.getElementById('data').value;
  const status = document.getElementById('status').value;

  if (!titulo || !autor) { alert('Preencha ao menos título e autor!'); return; }

  const lista = obterLeituras();
  lista.push({ titulo, autor, data, status });
  salvarLeituras(lista);

  // Limpa os campos após adicionar
  document.getElementById('inTitulo').value = '';
  document.getElementById('inAutor').value  = '';
  document.getElementById('inData').value   = '';

  renderizar();
});

// Ao carregar a página, exibe as leituras salvas
renderizar();
