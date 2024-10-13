 // Operadores

 // Operadores Aritméticos

 let a = 5
 let b = 10

 console.log (a + b) // Suma
 console.log (a - b) // Resta
 console.log (a / b) // División
 console.log (a % b) // Módulo
 console.log (a * b) // Multiplicación
 console.log (a ** b) // Exponente

 a++ // Incremento
 console.log(a)

 b-- // Decremento
 console.log(b)

 // Operadores de asignación

 let miVariable = 2
 console.log(miVariable)

 miVariable += 2
 console.log(miVariable)

 miVariable += 2
 miVariable -= 2
 miVariable /= 2
 miVariable %= 2
 miVariable *= 2
 miVariable **= 2

 // Operadores de comparación

 console.log(a)

 console.log(a > b)
 console.log(a < b)
 console.log(a >= b)
 console.log(a <= b)
 console.log(a == 6) // Igualdad por identidad 
 console.log(a == "6")  // Igualdad por valor
 console.log(a == a)
 console.log(a === a) // Igualdad por identidad (por tipo y valor)
 console.log(a === 6)  
 console.log(a === "6") // a es number y 6 es un string asi que no. misma variable diferente tipo
 console.log(a != 6)
 console.log(a !== "6")
 console.log(0 == false)
 console.log(1 == false)
 console.log(2 == false)
 console.log(0 == "")
 console.log(0 == " ")
 console.log(0 == '')
 console.log(0 == "Hola")
 console.log(0 === "")
 console.log(undefined == null)
 console.log(undefined === null)

 // Truthy values (valores verdaderos)

 // Todos los numeros positivos y negativos menos el cero
 // Todas las cadenas de texto menos las vacías
 // Todos los boolean

 // Falsy values (valores falsos)

 // 0
// 0n
// null
// undefined
// NaN
// el boolean false
// Cadenas de texto vacías

// Operadores Lógicos

// and (&&)
console.log (5 > 10 &&  15 > 20) // false (No cumple ninguna de las expresiones)
console.log (5 < 10 &&  15 > 20) // false (se cumple una expresión y la otra no)
console.log (5 < 10 &&  15 < 20) // true (Cumple las dos expresiones)

// or (||)
console.log( 5 > 10 || 15 > 20) // false (No se cumple ninguna de las expresiones)
console.log( 5 < 10 || 15 > 20) // true (Se cumple una de las expresiones)
console.log(5 < 10 || 15 < 20) // true (Se cumplen las dos expresiones)

console.log (5 > 10 && 15 > 20 || 30 < 40) // true ( )

// not (!)
console.log (5 > 10 && 15 > 20)
console.log (! (5 > 10 && 15 > 20))

console.log(!true)
console.log(!false)


// Operadores Ternarios - Permiten escribir una condición
const isRaining = true

isRaining ?  console.log("Está lloviendo") : console.log("No está lloviendo")