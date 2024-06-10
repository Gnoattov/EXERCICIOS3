function calcularLitros() {
    var precoLitro = parseFloat(document.getElementById("precoLitro").value);
    var valorPagamento = parseFloat(document.getElementById("valorPagamento").value);

    var litros = valorPagamento / precoLitro;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "O motorista conseguiu colocar " + litros.toFixed(2) + " litros no tanque.";
}
