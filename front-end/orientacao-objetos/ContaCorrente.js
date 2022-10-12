import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  // torna o numero de contas mesmo para todos
  static numeroDeContas = 0;
  agencia;
  _cliente;
  _saldo = 0;

  set cliente(novoValor) {
    // só aceita se for um Cliente
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }
  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  constructor(cliente, agencia) {
    this.agencia = agencia;
    this._cliente = cliente;
    // numeroDeContas pertence à ContaCorrente e não ao this
    ContaCorrente.numeroDeContas++;
  }

  sacar(valorSacado) {
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    } else {
      return;
    }
  }
  depositar(valorAdicionado) {
    if (valorAdicionado <= 0) {
      return;
    }
    this._saldo += valorAdicionado;
  }
  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
