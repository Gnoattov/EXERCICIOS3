function separarNumero() {
    var numero = parseInt(document.getElementById("numero").value);

    var centena = Math.floor(numero / 100);
    var dezena = Math.floor((numero % 100) / 10);
    var unidade = numero % 10;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "CENTENA = " + centena + "<br>" +
                          "DEZENA = " + dezena + "<br>" +
                          "UNIDADE = " + unidade;
}
