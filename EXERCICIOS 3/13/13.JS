function calcularArea() {
    var raio = parseFloat(document.getElementById("raio").value);

    var area = 3.14 * raio * raio;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Área da Pizza: " + area.toFixed(2) + " cm²";
}
