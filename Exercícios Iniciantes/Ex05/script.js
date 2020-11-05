function media() {
  var nota1 = Number(document.getElementById('n1').value)
  var nota2 = Number(document.getElementById('n2').value)
  var nota3 = Number(document.getElementById('n3').value)
  var res = document.getElementById('res')

  if (
    nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10
  ) {
    window.alert('[ERRO] Nota máxima permitida: 10.0. Nota mínima permitida: 0.0. Revise os valores.')

  } else {
    var media = ((nota1*2 + nota2*3 + nota3*5)/10).toFixed(1)
    res.innerHTML = `Média = ${media}`
  }

}