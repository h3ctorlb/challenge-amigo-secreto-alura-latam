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
  // 1. Validar que el array amigos no esté vacío
  if (amigos.length === 0) {
    alert("Por favor, inserte al menos un nombre.");
    return;
  }

  // 2. Generar un índice aleatorio válido
  let indice = Math.floor(Math.random() * amigos.length);

  // 3. Obtener el nombre sorteado
  let sorteado = amigos[indice];

  // 4. Mostrar el resultado en pantalla
  document.getElementById("resultado").innerHTML = "<li>" + sorteado + "</li>";
}
