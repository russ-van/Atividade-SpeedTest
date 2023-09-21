function cadastrarPedido() {
    let nome = document.querySelector("#nome").value;
    let mesa = parseInt(document.querySelector("#mesa").value);
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

}