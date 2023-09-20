document.addEventListener("DOMContentLoaded", function(){
    escreverMensagem()
})

function escreverMensagem(){
    let nome = localStorage.getItem("nome")
    let resp = document.querySelector("h1")
    resp.innerHTML = (`Seja bem-vindo, ${nome}.`)

}
