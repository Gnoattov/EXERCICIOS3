function calcularDivisao() {
    var valorTotal = parseFloat(document.getElementById("valorTotal").value);

    // Dividindo igualmente entre os três amigos
    var valorPorPessoa = valorTotal / 3;

    // Arredondando o valor para Carlos e André
    var valorCarlos = Math.floor(valorPorPessoa);
    var valorAndre = Math.floor(valorPorPessoa);

    // O restante é para Felipe
    var valorFelipe = valorTotal - valorCarlos - valorAndre;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Carlos: R$ " + valorCarlos.toFixed(2) + "<br>" +
                          "André: R$ " + valorAndre.toFixed(2) + "<br>" +
                          "Felipe: R$ " + valorFelipe.toFixed(2);
}
