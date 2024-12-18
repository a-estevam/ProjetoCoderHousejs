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
    let simulacoes = JSON.parse(localStorage.getItem("simulacoes")) || [];
    
    simulacoes = simulacoes.filter(simulacao => simulacao.id !== id);
    // localStorage.setItem("simulacoes", JSON.stringify(simulacoes));
    
    const cardToContratado = document.querySelector(`.card-guardar[data-id="${id}"]`);
    if (cardToContratado) {
        cardToContratado.style.backgroundColor = "#d4edda";
        cardToContratado.style.borderColor = "#c3e6cb";

        const buttonContratar = cardToContratado.querySelector("button");
        // const buttonExcluir = cardToContratado.querySelector(".btn_excluir");
    if (buttonContratar) {
        buttonContratar.style.backgroundColor = "gray"; 
        buttonContratar.style.color = "#363535"; 
        buttonContratar.disabled = true;
        buttonContratar.style.cursor = "not-allowed";
        // buttonExcluir.style.backgroundColor = "gray"; 
        // buttonExcluir.style.color = "#363535"; 
        // buttonExcluir.disabled = true;
        // buttonExcluir.style.cursor = "not-allowed";
       
    }

    alertContratar(id)
    }
    
}

function excluirSimulacao(id) {
    let simulacoes = JSON.parse(localStorage.getItem("simulacoes")) || [];
    
    
    simulacoes = simulacoes.filter(simulacao => simulacao.id !== id);
    localStorage.setItem("simulacoes", JSON.stringify(simulacoes));

    
    alertaExcluir(id, simulacoes);
}


