function produto(){
  var numA = document.getElementById('txtA')
  var numB = document.getElementById('txtB')
  var res = document.getElementById('res')
  
  var A = Number(numA.value)
  var B = Number(numB.value)

  var prod = A * B

  res.innerHTML = `${A} x ${B} = ${prod}`
}