/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Crea una variable para cada operación aritmética

const num1 = 10;
const num2 = 3;

// Suma
const suma = num1 + num2; // 10 + 3 = 13

// Resta
const resta = num1 - num2; // 10 - 3 = 7

// Multiplicación
const multiplicacion = num1 * num2; // 10 * 3 = 30

// División
const division = num1 / num2; // 10 / 3 = 3.333...

// Módulo (resto de la división)
const modulo = num1 % num2; // 10 % 3 = 1

console.log('Suma:', suma);
console.log('Resta:', resta);
console.log('Multiplicación:', multiplicacion);
console.log('División:', division);
console.log('Módulo:', modulo);



// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas


myVariable = 5

myVariable += 10
myVariable -=3
myVariable %=2
myVariable *=2
myVariable /=1

console.log(myVariable)

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

let a = 5
console.log(5)

console.log(5 > 1)
console.log(5 < 8)
console.log(a == 5)
console.log("Hola" != "Adios")
console.log(a >= 2)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log("Vacio" == "Lleno") 
console.log(0 == true)
console.log(7 === false)
console.log(undefined === null)
console.log(a != "5")

// 5. Utiliza el operador lógico and

console.log(4 < 5 && 4 < 10)
console.log(10 % 2 < 4 && 100 / 2 == 50) 

// 6. Utiliza el operador lógico or

console.log(5 > 2 || 2 < 3)
console.log(5 % 2 + 1 || a - 2 > 1)


// 7. Combina ambos operadores lógicos

console.log((5 > 2 && 3 < 5) || 10 > 20)

// 8. Añade alguna negación

console.log(!(5 > 2))

// 9. Utiliza el operador ternario
const caféMolido = true
const cafetera = true
const vasoDeCafé = true
const azúcar = false

caféMolido ? console.log("Pongo el café en el filtro de la cafetera...") : console.log("Vamos a moler el café primero...")
cafetera ? console.log("Colocamos la cafetera al fuego...") : console.log("Busca la cafetera")
vasoDeCafé ? console.log("Ponemos el café en el vaso") : console.log("Busca el vaso jodio' que no te enteras")
azúcar ? console.log("No gracias, mejor solo :) ") : console.log("Mejor dejame sacarina iste")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log (num1 - 4 < 8) || (10 ** 50 < 2)