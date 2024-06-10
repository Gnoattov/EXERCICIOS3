function calcularValorArrecadado() {
    var qtdPequenas = parseInt(document.getElementById("qtdPequenas").value);
    var qtdMedias = parseInt(document.getElementById("qtdMedias").value);
    var qtdGrandes = parseInt(document.getElementById("qtdGrandes").value);

    var precoPequena = 10;
    var precoMedia = 12;
    var precoGrande = 15;

    var valorArrecadado = (qtdPequenas * precoPequena) + (qtdMedias * precoMedia) + (qtdGrandes * precoGrande);

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Valor arrecadado pela fábrica de camisetas: R$ " + valorArrecadado.toFixed(2);
}
