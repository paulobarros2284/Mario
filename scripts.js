
const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario ")

function mostrarForm() {
    form.style.left = "40%"
    form.style.traform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}
function esconderForm() {
    form.style.left = "-300px"
    form.style.traform = "translatex(0)"
    mascara.style.visibility = "hidden"
}