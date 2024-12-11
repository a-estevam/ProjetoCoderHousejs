
const insertNome = document.querySelector("#nome");
const insertEmail = document.querySelector("#email");
const insertTelefone = document.querySelector("#telefone");
const insertValor = document.querySelector("#valor");
const insertParcelas = document.querySelector("#parcelas");
const cardSimulador = document.querySelector(".simulador-right");


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


function salvarSimulacao(simulacao) {
    let simulacoes = JSON.parse(localStorage.getItem("simulacoes")) || []; 
    simulacoes.push(simulacao); 
    localStorage.setItem("simulacoes", JSON.stringify(simulacoes)); 
}


function emprestimo() {
    let clienteAtivo = new Cliente(
        insertNome.value,
        insertEmail.value,
        insertTelefone.value,
        parseFloat(insertValor.value),
        parseInt(insertParcelas.value)
    );

    let valorSolicitado = clienteAtivo.valor;
    let quantidadeDeParcelas = clienteAtivo.parcelas;
    let taxaDeJuros = 1.49 / 100;
    let valorComJuros = valorSolicitado * (1 + taxaDeJuros * quantidadeDeParcelas);
    let valorPorParcelaComJuros = valorComJuros / quantidadeDeParcelas;

    if (isNaN(valorSolicitado) || valorSolicitado < 5000) {
        alert("Valor mínimo de R$5.000,00");
    } else if (
        insertNome.value.trim() === "" ||
        insertEmail.value.trim() === "" ||
        insertTelefone.value.trim() === "" ||
        isNaN(insertParcelas.value) ||
        insertParcelas.value.trim() === ""
    ) {
        alert("Preencha os campos corretamente");
    } else {
        alerta();

        setTimeout(function () {
            cardSimulador.innerHTML = ` 
                <div class="cardSimulador">
                    <h3>${clienteAtivo.nome}</h3>
                    <h2>${clienteAtivo.valor.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}</h2>
                    <p>na sua conta hoje mesmo!</p>
                    <h3>${clienteAtivo.parcelas}X ${valorPorParcelaComJuros.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}</h3>
                    <p>valor a ser pago ${valorComJuros.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}</p>
                    <a href="guardar.html" id="guardar" class="guardar"><button>Guardar simulação</button></a>
                </div>
            `;
        }, 3000);

        const simulacao = {
            id: Date.now().toString(), 
            cliente: clienteAtivo.nome,
            valor: valorSolicitado,
            parcelas: quantidadeDeParcelas,
            valorPorParcelaComJuros: valorComJuros,
        };

        salvarSimulacao(simulacao); 
    }
}
