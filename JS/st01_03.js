function cadastrarPedido() {
    let nome = document.querySelector("#nome").value;
    let mesa = parseInt(document.querySelector("#mesa").value);
<<<<<<< HEAD
    let comanda = parseInt(document.querySelector("#comanda").value);
    let total = parseFloat(document.querySelector("#total").value);
    let gorjeta = parseFloat( total + (total * 0.10));

    localStorage.setItem("nome", nome);
    localStorage.setItem("mesa", mesa);
    localStorage.setItem("comanda", comanda);
    localStorage.setItem("total", total);
    localStorage.setItem("gorjeta", gorjeta);

    document.querySelector("#ficha").innerHTML = `Nome: ${nome} <br> Mesa: ${mesa} <br> Comanda: ${comanda} <br> Total do pedido: ${total} <br> Gorjeta 10%: ${gorjeta}`;
    
=======
    let total = parseFloat(document.querySelector("#total").value);
    let gorjeta = (total * 0.10);
    let totalGorjeta = total + gorjeta

    localStorage.setItem("nome", nome);
    localStorage.setItem("mesa", mesa);
    localStorage.setItem("total", (total).toFixed(2));
    localStorage.setItem("gorjeta", (gorjeta).toFixed(2));
    localStorage.setItem("totalGorjeta", (totalGorjeta).toFixed(2));

    document.querySelector("#ficha").innerHTML = `
    <ul>        <li>Garçom: ${localStorage.getItem("nome")}</li>
                <li>Mesa: ${localStorage.getItem("mesa")}</li>
                <li>Gastos: R$ ${localStorage.getItem("total")}</li>
                <li>Gorjeta (10%): R$ ${localStorage.getItem("gorjeta")}</li>
                </ul>
                <p style="font-size: 135%; margin-left: 3vh;">Fatura total: R$ ${localStorage.getItem("totalGorjeta")}</p>`

>>>>>>> 2e7b7e8 (first commit)
}