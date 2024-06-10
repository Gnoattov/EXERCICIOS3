function calcularFerraduras() {
    var numeroCavalos = document.getElementById("numeroCavalos").value;
    var totalFerraduras = numeroCavalos * 4; // Cada cavalo possui 4 ferraduras
    var resultado = document.getElementById("resultado");
    resultado.textContent = "Total de ferraduras necessárias: " + totalFerraduras;
}
