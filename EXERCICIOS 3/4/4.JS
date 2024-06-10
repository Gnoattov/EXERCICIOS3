function calcularDiasDeVida() {
    var nome = document.getElementById("nome").value;
    var idade = parseInt(document.getElementById("idade").value);

    var diasDeVida = idade * 365;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = nome.toUpperCase() + " VOCE JA VIVEU " + diasDeVida + " DIAS";
}
