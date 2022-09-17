var valores = [true, 5, false, "hola", "adios", 2];
// punto 1
let string1 = valores[3].length
let string2 = valores[4].length

if(string1 > string2){
    console.log(valores[3])
}else{
    console.log(valores[4])
}
//otra forma de hacer el punto 1
let = strmayor = ""

valores.forEach(Element =>{
    if(typeof Element === "string"){
        if(Element.length >= strmayor.length)
            strmayor = Element; 
    }
});

console.log(`el string mas grande del array es ${strmayor}`)
//punto 2

let soyTrue;
let soyFalse;

valores.forEach(E =>{ // for each recorre el array 
    if(typeof  E === 'boolean'){ // typeof devuelve una cadena con el tipo 
        (E) ? (soyTrue = E) : (soyFalse = E);
    }
});
console.log(`el operador ${soyTrue} fue utilizado`)
console.log(`el operador ${soyFalse} ha sido utilizado`)
// punto 3 
let valor1
let valor2

valores.forEach(e =>{
    if(typeof e === 'number'){
        if (valor1 == null){
            valor1= e;
        }else if( valor2 == null){
            valor2 = e;
        }
    }
})
parseInt(valor1)
parseInt(valor2)

console.log(`${valor1} + ${valor2}  = `+ (valor1 + valor2))
console.log(`${valor1} - ${valor2}  = `+ (valor1 - valor2))
console.log(`${valor1} * ${valor2}  = `+ (valor1 * valor2))
console.log(`${valor1} / ${valor2}  = `+ (valor1 / valor2))

