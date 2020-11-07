function calcular() {
  let salario = Number(document.getElementById('salario').value)
  let res = document.getElementById('res')
  if (salario < 0) {
    window.alert('Salários não podem ser negativos')
  } else {
    if (salario > 0 && salario <=400) {
      let novoSalario = (salario * 1.15).toFixed(2)
      let reajuste = (novoSalario - salario).toFixed(2)
        res.innerHTML = `Novo salario: ${novoSalario}<br>` 
        res.innerHTML += `Reajuste ganho: ${reajuste}<br>`  
        res.innerHTML += `Em Percentual: 15%`      
   } else if (salario > 400 && salario <= 800) {
     let novoSalario = (salario * 1.12).toFixed(2)
     let reajuste = (novoSalario - salario).toFixed(2)
       res.innerHTML = `Novo salario: ${novoSalario}<br>`
       res.innerHTML += `Reajuste ganho: ${reajuste}<br>`
       res.innerHTML += 'Em Percentual: 12%'
   } else if (salario > 800 && salario <= 1200) {
     let novoSalario = (salario * 1.1).toFixed(2)
     let reajuste = (novoSalario - salario).toFixed(2)
       res.innerHTML = `Novo salario: ${novoSalario}<br>`
       res.innerHTML += `Reajuste ganho: ${reajuste}<br>`
       res.innerHTML += 'Em Percentual: 10%'
   } else if (salario > 1200 && salario <= 2000) {
     let novoSalario = (salario * 1.07).toFixed(2)
     let reajuste = (novoSalario - salario).toFixed(2)
       res.innerHTML = `Novo salario: ${novoSalario}<br>`
       res.innerHTML += `Reajuste ganho: ${reajuste}<br>`
       res.innerHTML += 'Em Percentual: 7%'
   } else {
     let novoSalario = (salario * 1.04).toFixed(2)
     let reajuste = (novoSalario - salario).toFixed(2)
       res.innerHTML = `Novo salario: ${novoSalario}<br>`
       res.innerHTML += `Reajuste ganho: ${reajuste}<br>`
       res.innerHTML += 'Em Percentual: 4%'
   }
  }
  
}