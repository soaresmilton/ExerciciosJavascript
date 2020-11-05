function calcular() {
  var inicio = Number(document.getElementById('inicio').value)
  var fim = Number(document.getElementById('fim').value)
  var res = document.getElementById('res')

  if (inicio < fim) {
    var tempoDeJogo = fim - inicio
  } else {
    tempoDeJogo = (24 - inicio) + fim
  }
  res.innerHTML = `O JOGO DUROU ${tempoDeJogo} HORA(S).`
}