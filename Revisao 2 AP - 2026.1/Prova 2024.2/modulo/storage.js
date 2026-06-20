const KEY = 'leituras-app';

export function obterLeituras() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
  //     ↑ parse obrigatório              ↑ fallback para array vazio
}

export function salvarLeituras(lista) {
  localStorage.setItem(KEY, JSON.stringify(lista));
  //                         ↑ stringify obrigatório
}
