function calcular () {
  var horas = Number(document.getElementById('tempo').value)
  var vel = Number(document.getElementById('vel').value)
  var res = document.getElementById('res')
  var autonomia = 12

  var distancia = horas * vel
  var combustivel = (distancia / autonomia).toFixed(3)

  res.innerHTML = `Distancia total percorrida: ${distancia}km <br> Combustível gasto: ${combustivel} litros.`  
}