function calcular() {
  var r = document.getElementById('txtr')
  var res = document.getElementById('res')
  var pi = 3.14159

  var raio = Number(r.value)
  var area = (pi * (raio ** 2)).toFixed(4)
  
  
  res.innerHTML = `A Área do círculo de raio ${raio} cm é igual: <br> A = ${area} cm³.`
}