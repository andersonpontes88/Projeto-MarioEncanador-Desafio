const form = document.querySelector(".Formulario-fale-conosco")
const mascara = document.querySelector(".Mascara-formulario")

function CliqueiNobotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}
function CliqueiNaMascara() {
    mascara.style.visibility = "hidden"
    form.style.left = "-320px"
    form.style.transform = "translateX(0)"
}
