const insertNome = document.querySelector("#nome")
const insertEmail = document.querySelector("#email")
const insertTelefone = document.querySelector("#telefone")
const insertValor = document.querySelector("#valor")
const insertParcelas = document.querySelector("#parcelas")
const cardSimulador = document.querySelector(".simulador-right")





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




    if (isNaN(valorSolicitado) || valorSolicitado < 5000){
        alert ("Valor mínimo de R$5.000,00")
    } else if(
      insertNome.value.trim() === "" ||
      insertEmail.value.trim() ==="" ||
      insertTelefone.value.trim() ==="" ||
      isNaN(insertParcelas.value) || insertParcelas.value.trim() === ""
    ){
      alert ("preencha os campos corretamente")
    } else{
      
      alerta()

      setTimeout(function() {
        cardSimulador.innerHTML = ` <div class="cardSimulador">
                    <h3>${clienteAtivo.nome}</h3>
                    <h2>${clienteAtivo.valor.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}</h2>
                    <p>na sua conta hoje mesmo!</p>

                    <h3>${clienteAtivo.parcelas}X ${valorPorParcelaComJuros.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}</h3>
                    <p>valor a ser pago ${valorComJuros.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}</p>

                    <button>Guardar simulação</button>

                    
                </div>`
      }, 3000);
      
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



// const guardar = document.querySelector("#guardando")
// const guardarContent = document.querySelector(".guardar-content")


// guardar.addEventListener("click", () => {
//   location.href = "/guardar.html";
//   setTimeout(()=>{
//     guardarContent.innerHTML += `<div class="card-guardar">
//               <div class="id">
//                   <p><strong>ID: </strong>0554</p>
//               </div>

//               <div class="valor">
//                   <p><strong>Valor: </strong>R$5000</p>
//               </div>

//               <div class="quantidade">
//                   <p><strong>Quantidade: </strong>12</p>
//               </div>

//               <div class="valorParcela">
//                   <p><strong>Valor Parcela: </strong>R$1.500,00</p>
//               </div>

//               <button>Contratar</button>
//           </div>`;
//   },3000)
// });
