import { Cliente } from "./Cliente.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("José", 10000, 12345678912);
diretor.cadastrarSenha(123456);
const gerente = new Diretor("Maria", 5000, 98765432198);
gerente.cadastrarSenha(111111);
const cliente = new Cliente("Lais", 56473829100, 221133);

const estaLogado = SistemaAutenticacao.login(gerente, 111111);
const estaLogado2 = SistemaAutenticacao.login(diretor, 123456);
const estaLogado3 = SistemaAutenticacao.login(cliente, 221133);

console.log(estaLogado, estaLogado2, estaLogado3);
