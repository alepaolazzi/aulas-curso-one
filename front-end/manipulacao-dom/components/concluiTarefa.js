const BotaoConclui = () => {
  const botaoConclui = document.createElement("button");

  botaoConclui.classList.add("check-button");
  botaoConclui.innerText = "concluir";

  botaoConclui.addEventListener("click", concluirTarefa);

  return botaoConclui;
};

const concluirTarefa = (e) => {
  const botaoConclui = e.target;
  // seleciona o pai do elemento clicado
  const tarefaCompleta = botaoConclui.parentElement;

  tarefaCompleta.classList.toggle("done");
};

export default BotaoConclui;
