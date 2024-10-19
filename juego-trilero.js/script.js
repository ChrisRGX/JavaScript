// Variables para el juego
let bolita = Math.floor(Math.random() * 3) + 1; // La bolita estará en el vaso 1, 2 o 3
const resultado = document.getElementById('resultado');
const botones = document.querySelectorAll('.vaso');

// Función para manejar el clic en los vasos
function jugar(event) {
    const eleccionJugador = parseInt(event.target.id.replace('vaso', ''));

    if (eleccionJugador === bolita) {
        resultado.innerText = "¡Correcto! La bolita estaba en el vaso " + bolita + ".";
        resultado.style.color = "green";
    } else {
        resultado.innerText = "¡Incorrecto! La bolita estaba en el vaso " + bolita + ".";
        resultado.style.color = "red";
    }

    // Deshabilitar los botones después de una elección
    botones.forEach(boton => boton.disabled = true);
}

// Reiniciar el juego
function reiniciarJuego() {
    bolita = Math.floor(Math.random() * 3) + 1; // Nueva posición de la bolita
    resultado.innerText = ""; // Limpiar el mensaje de resultado
    botones.forEach(boton => boton.disabled = false); // Habilitar botones
}

// Añadir eventos a los vasos
botones.forEach(boton => boton.addEventListener('click', jugar));

// Añadir evento al botón de reiniciar
document.getElementById('reiniciar').addEventListener('click', reiniciarJuego);
