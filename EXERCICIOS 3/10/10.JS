function converterTempo() {
    var totalDias = parseInt(document.getElementById("dias").value);

    var anos = Math.floor(totalDias / 365);
    var meses = Math.floor((totalDias % 365) / 30);
    var dias = (totalDias % 365) % 30;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Tempo sem acidentes: " + anos + " anos, " + meses + " meses e " + dias + " dias.";
}
