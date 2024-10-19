// Función para iniciar el juego
function iniciarJuego() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
    let intentos = 0;
    let adivinanza = 0;

    // Bucle para seguir preguntando hasta que adivine
    while (adivinanza !== numeroSecreto) {
        adivinanza = parseInt(prompt("Introduce un número entre 1 y 100:"));
        intentos++;

        if (adivinanza > numeroSecreto) {
            alert("¡Muy alto! Intenta de nuevo.");
        } else if (adivinanza < numeroSecreto) {
            alert("¡Muy bajo! Intenta de nuevo.");
        } else if (adivinanza === numeroSecreto) {
            alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
        }
    }
}

// Evento para el botón que inicia el juego
document.getElementById("startGame").addEventListener("click", iniciarJuego);
