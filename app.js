// Lista para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para añadir un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Verifica si el nombre es vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // Verifica si el nombre ya fue agregado
    if (listaAmigos.includes(nombre)) {
        alert(`El nombre "${nombre}" ya fue ingresado. Intenta con otro nombre.`);
        input.value = "";
        return;
    }

    listaAmigos.push(nombre); // Agrega el nombre a la lista
    mostrarLista();           // Actualiza la lista en pantalla
    input.value = "";         // Limpia el campo de entrada
}

// Función para mostrar la lista de nombres en pantalla
function mostrarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpia la lista anterior

    listaAmigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

// Función para sortear un solo ganador aleatorio
function sortearAmigo() {
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ""; // Limpia resultados anteriores

    if (listaAmigos.length < 2) {
        alert("Debes ingresar al menos dos nombres para hacer el sorteo.");
        return;
    }

    // Selecciona un nombre aleatorio de la lista
    const ganador = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    // Muestra el ganador en la lista de resultados
    const li = document.createElement("li");
    li.textContent = `🎉 El ganador es: ${ganador}`;
    ulResultado.appendChild(li);
}
