import { valida } from "./validacao.js";

const entradas = document.querySelectorAll("input");

entradas.forEach((entrada) => {
  if (entrada.dataset.tipo === "preco") {
    SimpleMaskMoney.setMask(entrada, {
      prefix: "R$ ",
      fixed: true,
      fractionDigits: 2,
      decimalSeparator: ",",
      thousandsSeparator: ".",
      cursor: "end",
    });
  }

  entrada.addEventListener("blur", (e) => {
    valida(e.target);
  });
});
