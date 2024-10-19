// 1. Escribe un comentario en una línea

let comentario1 = ("Este es un comentario en una sola linea")
console.log(comentario1)


// 2. Escribe un comentario en varias líneas

let comentario2 = `Este es un
un comentario
en varias lineas`
console.log(comentario2)




// 3. Declara variables con valores asociados a todos los datos de tipo primitivo

let name = "Pipopo"

let peso = 85.5

let estoyAprendiendo = true

let estoyDurmiendo = false

let ufo = null


let Pi = Symbol("3.14")

let unicornio = undefined

let estrellaseneluniverso = BigInt(981273918273918273918237918273918731)


// 4. Imprime por consola el valor de todas las variables

console.log(name)
console.log(peso)
console.log(estoyAprendiendo)
console.log(estoyDurmiendo)
console.log(ufo)
console.log(Pi)
console.log(unicornio)
console.log(estrellaseneluniverso)

// 5. Imprime por consola el tipo de todas las variables 

console.log (name + " is a: " + typeof name)
console.log(peso + " is a: " +typeof peso)
console.log(estoyAprendiendo + " is a: " + typeof estoyAprendiendo)
console.log(estoyDurmiendo + " is a: " + typeof estoyDurmiendo)
console.log(ufo + " is a: " + typeof ufo)
console.log(Symbol + " is a: " + typeof Symbol)
console.log(unicornio + " is a: " + typeof unicornio)
console.log(estrellaseneluniverso + " is a: " + typeof estrellaseneluniverso)



// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

name = "Bayo"

peso = 70.4

estoyAprendiendo = false

estoyDurmiendo = true

ufo = null


Pi = Symbol("33.14")

undefinedValue = undefined

estrellaseneluniverso = BigInt(98124234273918273918237918273918731)


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

name = "1337"
peso = true
estoyDurmiendo = null
ufo = Symbol("ovni")
console.log(ufo)
name = estrellaseneluniverso
hormigas = 999930123934534534534128391283n

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const nick = "Zeus"
const weight = 84.5
const sleep = true
const cotorra = Symbol("pajarovolador")
const acaros = BigInt(9999999999999999999999999999999999999999999999999999999999)
const papelhigienico = null
const amor = undefined


// 9. A continuación, modifica los valores de las constantes 

console.log ("En JavaScript, las constantes (const) no se pueden reasignar una vez que se les ha asignado un valor. Si intentas reasignar una constante, obtendrás un error.")
console.log ("Al tratar de modificar el valor de una const obtendremos: TypeError: Assignment to constant variable.")

// 10. Comenta las lineas que produzcan algún tipo de error al ejecutarse

// TypeError: Assignment to constant variable.
