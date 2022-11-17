function matematica(){



    let valor1 = document.getElementById('n1').value
    let valor2 = document.getElementById('n2').value

    document.getElementById('resultado').innerHTML  = (valor1) + (valor2)
    document.getElementById('resultado2').innerHTML = (valor1) - (valor2)
    document.getElementById('resultado3').innerHTML = (valor1) * (valor2)
    document.getElementById('resultado4').innerHTML = (valor1) / (valor2)

}