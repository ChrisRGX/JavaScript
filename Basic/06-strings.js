// Strings (Cadenas de Texto)


// Concatenación

let myName = "Christian"
let greeting = "Hola, " + myName + "!" + " Esto es JavaScript jodio!"
console.log(greeting)
console.log(typeof greeting)

// Longuitud

console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[2])
console.log(greeting[3])

// console.log(greeting[42])  // aunque tenga cuarenta y dos  caracteres en programación empieza a contar desde cero por lo que en este caso va desde el "0" hasta el "41"
console.log(greeting[41])

// Métodos comunes

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Christian"))
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("jodio"))
console.log(greeting.includes("Christian"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("chorizo"))
console.log(greeting.slice(0, 10)) // Sección
console.log(greeting.replace("Christian", "chorizo")) // Reemplazo

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, este
es mi
curso de
JavaScript`
console.log(message)

// Interpolación de valores
let email = "codingconchris@gmail.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)
