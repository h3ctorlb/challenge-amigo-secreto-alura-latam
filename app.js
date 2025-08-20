// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  // 1. Capturar el valor del input
  let nombre = document.getElementById("amigo").value;

  // 2. Validar que no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return; // detenemos la función aquí
  }

  // 3. Si es válido, agregar al array amigos
  amigos.push(nombre);

  // 4. Limpiar el campo de entrada
  document.getElementById("amigo").value = "";

  // 5. Actualizar la lista en pantalla
  actualizarLista();
}
function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    // aquí se repite lo de adentro para cada amigo
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}
function sortearAmigo() {
  // 1) Validar
  if (amigos.length === 0) {
    alert("Ya no hay más nombres por sortear.");
    return;
  }

  // 2) Índice aleatorio
  const indice = Math.floor(Math.random() * amigos.length);

  // 3) Tomar y ELIMINAR el nombre
  const sorteado = amigos.splice(indice, 1)[0];

  // 4) Limpiar lista visual y mostrar resultado
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById(
    "resultado"
  ).innerHTML = `<li>El amigo secreto sorteado es: <strong>${sorteado}</strong></li>`;

  // 5) Si ya no queda nadie, deshabilitar botón (usa el aria-label del HTML) :contentReference[oaicite:0]{index=0}
  const botonSortear = document.querySelector(
    'button[aria-label="Sortear amigo secreto"]'
  );
  if (botonSortear && amigos.length === 0) botonSortear.disabled = true;
}
