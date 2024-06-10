function calcularDistancia() {
    var x1 = parseInt(document.getElementById("x1").value);
    var y1 = parseInt(document.getElementById("y1").value);
    var x2 = parseInt(document.getElementById("x2").value);
    var y2 = parseInt(document.getElementById("y2").value);

    var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "A distância entre os dois pontos é: " + distancia.toFixed(2);
}
