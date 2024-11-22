class Cliente {
  constructor(nome, valor) {
    this.nome = nome;
    this.valor = valor;
  }
  pegarNome() {
    this.nome = prompt("qual é o seu nome?");
  }
  pegarValor() {
    this.valor = parseFloat(prompt("Valor do empréstimo"));
    return this.valor;
  }
  descricao() {
    console.log(
      `O cliente = ${
        this.nome
      } solicitou um empréstimo de = ${this.valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })}`
    );
  }
}

export default Cliente;
