//IIFE- tudo adicionado dentro de uma arrow function auto-iniciada para que o código fique seguro. Ex: (() =>{/code/})() -> auto-inicio
import BotaoConclui from "./components/concluiTarefa.js";
import BotaoDeleta from "./components/deletaTarefa.js";

const botaoNovaTarefa = document.querySelector("[data-form-button]");

const criarTarefa = (e) => {
  e.preventDefault();

  const lista = document.querySelector("[data-list]");
  const entrada = document.querySelector("[data-form-input]");
  const valor = entrada.value;
  const tarefa = document.createElement("li");
  tarefa.classList.add("task");
  const conteudo = `<p class="content">${valor}</p>`;
  tarefa.innerHTML = conteudo;

  // a li chama as funções que criam os componentes dentro dela
  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());
  lista.appendChild(tarefa);

  entrada.value = " ";
};

botaoNovaTarefa.addEventListener("click", criarTarefa);
