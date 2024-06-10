function calcularSalario() {
    var salario = parseFloat(document.getElementById("salario").value);

    var salarioAumentado = salario * 1.15;
    var salarioFinal = salarioAumentado * 0.92; // Desconto de 8% de impostos

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Salário inicial: R$ " + salario.toFixed(2) + "<br>" +
                          "Salário com aumento de 15%: R$ " + salarioAumentado.toFixed(2) + "<br>" +
                          "Salário final após desconto de 8% de impostos: R$ " + salarioFinal.toFixed(2);
}
