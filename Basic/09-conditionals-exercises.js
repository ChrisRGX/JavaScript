/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.youtube.com/live/XCNjoIoO3Ws?si=3XCjdZ9r41JID-by&t=978
*/

// if/else/else if/ternaria


// 1. Imprime por consola tu nombre si una variable toma su valor

let name = "pepe"
if (name == "pepe"){
console.log(name)   
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "nick"
let contraseña = "Name"

if (usuario == "nick" && contraseña == "Name") { 
console.log("correcto")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let número = 0 
if (número > 0){
console.log(`${número} es positivo`)
} else if(número < 0){
console.log(`${número} es negativo`) 
} else(número == 0)
console.log(`${número} es igual`)


// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan


let age = 19

if (age => 18) 
console.log("Puede votar")
 else (age < 18) 
console.log(`No puede votar, le faltan ${18 - age} años.`)
console.log("No puedes votar" + (18 - age) )

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
{
age = 14
const persona = age >= 18 ? "adulto" : "menor"
console.log(persona)
}

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
 {
let mes = 8
let estacion = ""
if (mes == 1 || mes== 2 || mes== 3){
estacion = "Invierno"
} else if (mes == 4 || mes== 5 || mes== 6){
estacion = "Primavera"
} else if (mes == 7 || mes== 8 || mes== 9){
estacion = "Verano"
} else if (mes == 10 || mes== 11 || mes== 12)
    estacion = "Otoño"
     
    console.log(`dasdasdadsasda ${estacion} del año`)
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

{
let dias
let mes = 3
if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10|| mes == 12){
dias = 31
} else if(mes == 4 || mes == 6 || mes == 9 || mes ==11){
dias = 30
} else(mes == 2)
dias = 28 
console.log(`Este mes tiene ${dias} dias.`)
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma


 
// 9. Usa un switch para hacer de nuevo el ejercicio 6
mes = 6
switch (mes)
{
case 0: "Enero"
case 1: "Febrero"
case 2:    "Marzo"
estacion = "Invierno"
break 
case 3: "Abril"
case 4: "Mayo"
case 5: "Junio"
estacion = "Primavera" 
break
case 6: "Julio"
case 7: "Agosto"
case 8: "Septiembre"
estacion = "Verano"
break
case 9: "Octubre"
case 10: "Noviembre"
case 11: "Diciembre"
estacion = "Otoño"
}

console.log(`Estamos en la estación de ${estacion}`)

// 10. Usa un switch para hacer de nuevo el ejercicio 7
mes = 2
let dias

switch (mes)
{
case 0: "Enero"
    case 2: "Marzo"
    case 5:  "Mayo"
    case 6: "Julio"
    case 7: "Agosto"
    case 9: "Octubre"
    case 11: "Diciembre"
    dias = "31"
    break 
    case 3: "Abril"
    case 5: "Junio"
    case 8: "Septiembre"
    case 10: "Noviembre"
    case 4: "Mayo"
    dias = "30" 
    break
    dias = "28"
    break
    default:
    dias = 'Mes no válido'
}  
console.log("El mes tiene: " + dias + " días."); 

//

let myArray = [1, "A", 2, "B", [0, [2, 3 ,4 , 5] , 5, 2], "C"]
let myArray2 = []
let myArray3 = []
console.log(myArray.length)
console.log(typeof myArray)
myArray2 = myArray[4]
myArray3 = myArray2[1]
console.log(myArray)
console.log(myArray2)
console.log(myArray3)





// for(let i = 0; i < myArray.length; i++)
// {
// if(myArray[i])
// }