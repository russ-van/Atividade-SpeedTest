function cadastrarPedido() {
    let nome = document.querySelector("#nome").value;
    let mesa = parseInt(document.querySelector("#mesa").value);
    let comanda = parseInt(document.querySelector("#comanda").value);
    let total = parseFloat(document.querySelector("#total").value);
    let gorjeta = parseFloat( total + (total * 0.10));

    localStorage.setItem("nome", nome);
    localStorage.setItem("mesa", mesa);
    localStorage.setItem("comanda", comanda);
    localStorage.setItem("total", total);
    localStorage.setItem("gorjeta", gorjeta);

    document.querySelector("#ficha").innerHTML = `Nome: ${nome} <br> Mesa: ${mesa} <br> Comanda: ${comanda} <br> Total do pedido: ${total} <br> Gorjeta 10%: ${gorjeta}`;
    
}