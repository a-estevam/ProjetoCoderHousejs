const insertName = document.querySelector('#nome').value;
const insertValue = document.querySelector('#valor').value;


class Cliente {
  constructor(nome, valor) {
    this.nome = nome;
    this.valor = valor;
  }
  pegarNome() {
    this.nome = insertName;
  }
  pegarValor() {
    this.valor = insertValue;
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

console.log(insertName)

export default Cliente;
