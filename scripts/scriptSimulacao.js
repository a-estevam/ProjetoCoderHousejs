document.addEventListener("DOMContentLoaded", () => {
    const guardarContent = document.querySelector(".guardar-content");
    const saudacao = document.querySelector(".saudacao");
    const simulacoes = JSON.parse(localStorage.getItem("simulacoes")) || [];

    if (simulacoes.length === 0) {
        guardarContent.innerHTML = "<p>Não há simulações guardadas.</p>";
        saudacao.innerHTML = `Olá, visitante!`;
        return;
    }

    saudacao.innerHTML = `Olá, ${simulacoes[0].cliente}!`;

    

    simulacoes.forEach((simulacao) => {
        const card = document.createElement("div");
        card.classList.add("card-guardar");
        card.setAttribute("data-id", simulacao.id);
    
        card.innerHTML = `
            <div class="id">
                <p><strong>ID: </strong>${simulacao.id}</p>
            </div>
            <div class="valor">
                <p><strong>Valor: </strong>${simulacao.valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</p>
            </div>
            <div class="quantidade">
                <p><strong>Quantidade: </strong>${simulacao.parcelas}</p>
            </div>
            <div class="valorParcela">
                <p><strong>Valor Parcela: </strong>${(simulacao.valorPorParcelaComJuros / simulacao.parcelas).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</p>
            </div>
            <div>
            <button onclick="contratarSimulacao('${simulacao.id}')">Contratar</button>
            <button class="btn_excluir" onclick="excluirSimulacao('${simulacao.id}')">Excluir</button>
            </div>
        `;
    
        guardarContent.appendChild(card);
    });
});

function contratarSimulacao(id) {
    // alertContratar(id)
    alert(`Simulação com ID ${id} contratada!`);
}

function excluirSimulacao(id) {
    
    let simulacoes = JSON.parse(localStorage.getItem("simulacoes")) || [];
    simulacoes = simulacoes.filter(simulacao => simulacao.id !== id);
    localStorage.setItem("simulacoes", JSON.stringify(simulacoes));
    
    
    const cardToRemove = document.querySelector(`.card-guardar[data-id="${id}"]`);
    if (cardToRemove) cardToRemove.remove();

    
    if (simulacoes.length === 0) {
        document.querySelector(".guardar-content").innerHTML = "<p>Não há simulações guardadas.</p>";
    }
}
