function media() {
  var nota1 = Number(document.getElementById('n1').value)
  var nota2 = Number(document.getElementById('n2').value)
  var res = document.getElementById('res')


  if (0.00 > nota1 || nota1 > 10.00 || 0.00 > nota2 || nota2 > 10.00) {
    window.alert('Nota máxima permitida: 10.00. Nota mínima permitida: 0.00. Corrija os dados por favor.')
  } else {
    var media = ((nota1 * 3.5 + nota2 * 7.5) / 11).toFixed(2)
    res.innerHTML = `Média = ${media}`
  }

}