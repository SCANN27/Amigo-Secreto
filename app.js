// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Creamos un array vacío para almacenar los nombres
let amigos = [];

// Función para añadir un amigo desde el input
function agregarAmigo() {
    let input = document.querySelector("input"); // selecciona el campo de texto
    let nombre = input.value.trim(); // elimina espacios antes y después

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el campo de texto
    input.value = "";

    // Mostrar en consola (puedes cambiarlo por mostrar en HTML)
    console.log("Lista de amigos:", amigos);
}

// Función para añadir amigos
function agregarAmigo() {
    let input = document.querySelector("input");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    console.log("Lista de amigos:", amigos);
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos en el array
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    //let amigoSorteado = amigos[indiceAleatorio];

    // Obtener y eliminar el nombre sorteado del array
    let amigoSorteado = amigos.splice(indiceAleatorio, 1)[0];

    // Mostrar el resultado en un elemento con id="resultado"
    document.getElementById("resultado").innerHTML =
        `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}
