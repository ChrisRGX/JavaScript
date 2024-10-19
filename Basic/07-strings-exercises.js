/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Concatena dos cadenas de texto

let nick = "Bayo"
let game = "Valorant"
let rank = "Hierro 1"
let info = `Entra al juego ${nick}! Player del ${game} rankeando actualmente en ${rank}!!!`
console.log(info)

// 2. Muestra la longitud de una cadena de texto

console.log(info.length)

// 3. Muestra el primer y último carácter de un string

console.log(info[0])
console.log(info[info.length -1])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(info.toUpperCase())
console.log(info.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let message = `H  A
O  D
L  I N D O  D Í A !
A  O
   S`
 console.log(message)

 
 // 6. Interpola el valor de una variable en un string

 let profesion = "Chef"
 let pais = "España"
 let estrellas = 2  // Imaginamos que seleccionamos el número de estrellas
 let michelin;
 
 if (estrellas === 1) {
   michelin = "1 estrella Michelin"
 } else if (estrellas === 2) {
   michelin = "2 estrellas Michelin"
 } else if (estrellas === 3) {
   michelin = "3 estrellas Michelin"
 }

 let star = `Este restaurante tiene ${michelin}`
 console.log(star)
 
 let texto = `Los ${profesion} de ${pais} son los que mejores ${michelin} hay en el mundo!`
 console.log(texto)
 
 // Usando un array
 let opcionesMichelin = ["1 estrella Michelin", "2 estrellas Michelin", "3 estrellas Michelin"]
 let seleccion = 0
 
 xdo = `Este restaurante tiene ${opcionesMichelin[seleccion]}`
 console.log(xdo)
 

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let textoConGuiones = info.replaceAll(" ", "-")
console.log(textoConGuiones)


// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(info.includes("Cables"))
console.log(info.includes("Valorant"))


// 9. Comprueba si dos strings son iguales 

console.log(game == nick)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(profesion.length > game.leght)