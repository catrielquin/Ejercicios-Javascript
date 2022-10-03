numero = prompt("ingrese un numero: ")
alert(numero)

var factorial = 1


for(var i = 1; i <= numero ; i++){
    factorial = factorial * i
    console.log(factorial)
}

console.log(`el factorial de ${numero} es: ${factorial}`)