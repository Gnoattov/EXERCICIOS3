function calcularValor() {
    var pesoPrato = parseFloat(document.getElementById("pesoPrato").value);
    var precoPorQuilo = 12.00;

    var valorPagar = pesoPrato * precoPorQuilo;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Valor a pagar: R$ " + valorPagar.toFixed(2);
}
