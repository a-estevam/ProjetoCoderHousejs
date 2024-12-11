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


