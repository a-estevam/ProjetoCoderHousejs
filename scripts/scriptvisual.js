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

// function alertContratar(id) {
//   Swal.fire({
//     position: "center",
//     icon: "success",
//     title: `Simulação com ID ${id} contratada!`,
//     showConfirmButton: false,
//     timer: 1500
//   });
// }
