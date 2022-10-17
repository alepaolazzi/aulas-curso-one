/* 
  Ser autenticável == ter propriedade senha, sem importar quem pede a autenticação
  Polimorfismo == tratar objetos diferentes de maneiras semelhantes
*/
// Duck type == não precisar especificar o tipo que é, possuindo o que é necessário, o js supõe-se que seja um obj esperado

export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }
  // in - usado para verificar se a chave existe dentro do objeto autenticavel passado
  static ehAutenticavel(autenticavel) {
    return (
      "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function
    );
  }
}
