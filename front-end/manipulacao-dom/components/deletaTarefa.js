const BotaoDeleta = () => {
  const botaoDeleta = document.createElement("button");
  botaoDeleta.innerText = "deletar";

  botaoDeleta.addEventListener("click", deletarTarefa);
  return botaoDeleta;
};

const deletarTarefa = (e) => {
  const botaoDeleta = e.target;
  //pega o elemento pai do botao tarefa, a li
  const tarefaCompleta = botaoDeleta.parentElement;

  // método que remove a tarefa do dom
  tarefaCompleta.remove();

  return botaoDeleta;
};

export default BotaoDeleta;
