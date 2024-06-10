function calcularDiasPassados() {
    var dia = parseInt(document.getElementById("dia").value);
    var mes = parseInt(document.getElementById("mes").value);

    var diasPassados = (mes - 1) * 30 + dia;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Dias passados desde o início do ano: " + diasPassados;
}
