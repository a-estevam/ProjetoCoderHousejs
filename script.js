function emprestimo() {
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
          `O cliente = ${this.nome} solicitou um empréstimo de = R$${this.valor}`
        );
      }
    }
    let clienteAtivo = new Cliente();
  
    clienteAtivo.pegarNome();
    let taxaDeJuros = 1.49 / 100;
    let desejaContinuar = prompt(
      `${clienteAtivo.nome}, deseja simular um empréstimo? s/n`
    );
  
    while (desejaContinuar.toLowerCase() != "n") {
      let valorSolicitado = clienteAtivo.pegarValor();
      if (isNaN(valorSolicitado) || valorSolicitado <= 0) {
        alert("digite um valor válido");
        continue;
      }
  
      let quantidadeDeParcelas = parseInt(prompt("Quantidade de parcelas"));
      if (
        isNaN(quantidadeDeParcelas) ||
        quantidadeDeParcelas < 1 ||
        quantidadeDeParcelas > 12
      ) {
        alert("digite de 1 à 12x");
        continue;
      }
  
      let valorComJuros =
        valorSolicitado * (1 + taxaDeJuros * quantidadeDeParcelas);
      let valorPorParcelaComJuros = valorComJuros / quantidadeDeParcelas;
  
      console.log(`R$${valorSolicitado} parcelado em ${quantidadeDeParcelas}x`);
  
      for (let i = 1; i <= quantidadeDeParcelas; i++) {
        console.log(`Parcela ${i} - R$${valorPorParcelaComJuros.toFixed(2)}`);
      }
      console.log(
        `${clienteAtivo.nome}, você irá pagar: R$${valorComJuros.toFixed(2)}!`
      );
      console.log(clienteAtivo.descricao());
  
      desejaContinuar = prompt("deseja fazer uma nova simulação? s/n");
    }
  }
  
  emprestimo();