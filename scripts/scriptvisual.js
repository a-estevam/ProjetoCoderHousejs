const slider = document.getElementById("slider");
const valor = document.getElementById("slider-value");



if (slider && valor) {
  slider.addEventListener("input", () => {
    valor.textContent = parseInt(slider.value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  });
} 


function alerta(){
    setTimeout(function() {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Sua simulação está pronta!",
            showConfirmButton: false,
            timer: 1500
          });
      }, 900);
}

function alertValor(){
  Swal.fire({
    position: "center",
    icon: "error",
    title: "Valor mínimo R$ 5.000,00",
    showConfirmButton: false,
    timer: 1500
  });
}

function alertCamposObrigatório(){
  Swal.fire({
    position: "center",
    icon: "info",
    title: "Todos os campos são obrigatórios",
    showConfirmButton: false,
    timer: 1500
  });
}

function alertContratar(id) {
  Swal.fire({
    position: "center",
    icon: "success",
    title: `Contrato Nº ${id} enviada para aprovação!`,
    showConfirmButton: false,
    timer: 3500
  });
}


function alertaExcluir(id, simulacoes) {
  Swal.fire({
    title: "Você tem certeza que deseja excluir esta simulação?",
    showCancelButton: true,
    confirmButtonText: "Sim, excluir",
    denyButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      
      const cardToRemove = document.querySelector(`.card-guardar[data-id="${id}"]`);
      if (cardToRemove) {
        cardToRemove.remove();
      }

      
      if (simulacoes.length === 0) {
          document.querySelector(".guardar-content").innerHTML = "<p>Não há simulações guardadas.</p>";
      }

      Swal.fire("Simulação excluída!", "", "success"); 
    } else if (result.isDenied) {
      Swal.fire("A simulação não foi excluída", "", "info"); 
    }
  });
}