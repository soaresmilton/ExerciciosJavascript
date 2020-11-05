function soma() {
  var a = document.getElementById('txtA')
  var b = document.getElementById('txtB')
  var res = document.getElementById('res')

  var A = Number(a.value)
  var B = Number(b.value)
  var X = A + B

  res.innerHTML = `X = ${X}`
}


