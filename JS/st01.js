function cadastrarPessoa() {
    let nome = document.querySelector("#nome").value
    localStorage.setItem("nome", nome)

    window.location.href = "bemvindo.html"
    
}
function removerPessoa (){
    localStorage.removeItem("nome")
    document.querySelector("h1").innerHTML = `Inscrição cancelada! ❌`

}