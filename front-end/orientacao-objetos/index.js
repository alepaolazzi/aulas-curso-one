import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("José", 12324567891);
const conta1 = new ContaCorrente(cliente1, 1001);

const cliente2 = new Cliente("Alice", 98756783210);
const conta2 = new ContaCorrente(cliente2, 1001);

// Ações realizadas
conta1.depositar(200);
conta2.depositar(150);
conta1.transferir(30, conta2);
console.log("CONTA 2 saldo:", conta2.saldo);
console.log(conta2);
// Para acessar o número de contas:
console.log(ContaCorrente.numeroDeContas);
