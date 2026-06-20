const KEY = 'tarefas-app';

export function obterTarefas() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
  //     ↑ parse obrigatório              ↑ fallback para array vazio
}

export function salvarTarefas(lista) {
  localStorage.setItem(KEY, JSON.stringify(lista));
  //                         ↑ stringify obrigatório
}
