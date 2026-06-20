import { obterLeituras, salvarLeituras } from './storage.js';
import { renderizar }                   from './dom.js';

const btn = document.getElementById('btnAdicionar');

btn.addEventListener('click', () => {
  const titulo = document.getElementById('inTitulo').value.trim();
  const autor  = document.getElementById('inAutor').value.trim();
  const data   = document.getElementById('inData').value;
  const status = document.getElementById('inStatus').value;

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
