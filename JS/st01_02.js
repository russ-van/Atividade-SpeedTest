
function soma() {
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let soma = numero1 + numero2

    document.querySelector("#resultado").innerHTML = (`Soma = ${soma}.`)

}

function diminuir() {
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let subtracao = (numero1 - numero2)
    document.querySelector("#resultado").innerHTML = (`Subtração = ${subtracao}.`)

}
function mult() {
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let mult = (numero1 * numero2)
    document.querySelector("#resultado").innerHTML = (`Multiplicação = ${mult}.`)

}
function dividir() {
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let dividir = (numero1 / numero2)
    document.querySelector("#resultado").innerHTML = (`Divisão = ${dividir}.`)

}
function resto() {
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let resto = (numero1 % numero2)
    document.querySelector("#resultado").innerHTML = (`Resto da divisão = ${resto}.`)

}