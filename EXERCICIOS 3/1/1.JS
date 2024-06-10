function calcularArea() {
    var largura = parseFloat(document.getElementById("largura").value);
    var comprimento = parseFloat(document.getElementById("comprimento").value);

    if (isNaN(largura) || isNaN(comprimento)) {
        alert("Por favor, insira valores válidos para largura e comprimento.");
        return;
    }

    var area = largura * comprimento;
    document.getElementById("resultado").innerHTML = "Área do Terreno: " + area.toFixed(2) + " metros quadrados.";
}
