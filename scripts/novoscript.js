const insertNome = document.querySelector("#nome")
const insertEmail = document.querySelector("#email")
const insertTelefone = document.querySelector("#telefone")
const insertValor = document.querySelector("#valor")
const insertParcelas = document.querySelector("#parcelas")


document.getElementById("simular").addEventListener("click", (event) => {
    event.preventDefault(); 
    emprestimo();
});


class Cliente {
    constructor(nome, email, telefone, valor, parcelas) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.valor = valor;
        this.parcelas = parcelas;
    }
}


function emprestimo(){
    let clienteAtivo = new Cliente(
        insertNome.value,
        insertEmail.value,
        insertTelefone.value,
        parseFloat(insertValor.value), 
        parseInt(insertParcelas.value) 
    );

    let valorSolicitado = clienteAtivo.valor
    let quantidadeDeParcelas = clienteAtivo.parcelas
    let taxaDeJuros = 1.49 / 100;
    let valorComJuros = valorSolicitado * (1 + taxaDeJuros * quantidadeDeParcelas)
    let valorPorParcelaComJuros = valorComJuros / quantidadeDeParcelas

    if (isNaN(valorSolicitado) || valorSolicitado <= 5000){
        alert ("Valor mínimo de R$5.000,00")
    }

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
      console.log(clienteAtivo);

}



