function calcularArrecadacao() {
    var qtdPaes = parseInt(document.getElementById("qtdPaes").value);
    var qtdBroas = parseInt(document.getElementById("qtdBroas").value);

    var valorPaes = 0.12;
    var valorBroas = 1.50;

    var totalArrecadado = (qtdPaes * valorPaes) + (qtdBroas * valorBroas);
    var valorPoupanca = totalArrecadado * 0.10;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "<h2>Resultados:</h2>" +
                          "<p>Total arrecadado: R$ " + totalArrecadado.toFixed(2) + "</p>" +
                          "<p>Valor a ser guardado na poupança: R$ " + valorPoupanca.toFixed(2) + "</p>";
}
