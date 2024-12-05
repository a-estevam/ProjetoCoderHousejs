import  Cliente  from "./Cliente.js";

function emprestimo() {
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
      quantidadeDeParcelas > 36
    ) {
      alert("digite de 1 à 36x");
      continue;
    }

    let valorComJuros =
      valorSolicitado * (1 + taxaDeJuros * quantidadeDeParcelas);
    let valorPorParcelaComJuros = valorComJuros / quantidadeDeParcelas;

    console.log(
      `${valorSolicitado.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })} parcelado em ${quantidadeDeParcelas}x`
    );

    for (let i = 1; i <= quantidadeDeParcelas; i++) {
      console.log(
        `Parcela ${i} = ${valorPorParcelaComJuros.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}`
      );
    }
    console.log(
      `${clienteAtivo.nome}, você irá pagar:${valorComJuros.toLocaleString(
        "pt-br",
        { style: "currency", currency: "BRL" }
      )}!`
    );
    console.log(clienteAtivo.descricao());

    desejaContinuar = prompt("deseja fazer uma nova simulação? s/n");
  }
}

// emprestimo();




