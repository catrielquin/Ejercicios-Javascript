frase = prompt("ingrese una frase: ")

alert(reversa(frase))

function reversa(frase){
    
    const fraseReversa = frase.split("").reverse().join("")

    return fraseReversa === frase ? "es palindromo" : "no es palindromo";

}
