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
 // 1) Si no hay nombres, avisamos y salimos
  if (amigos.length === 0) {
    alert("Ya no hay más nombres por sortear.");
    return;
  
// 2. Generar un índice aleatorio válido
    const indice = Math.floor(Math.random() * amigos.length);

// 3) Tomar y ELIMINAR el nombre del arreglo
  const sorteado = amigos.splice(indice, 1)[0];
  
 // 4) Mostrar resultado
  document.getElementById("resultado").innerHTML = `<li>${sorteado}</li>`;

  // 5) Refrescar la lista en pantalla para que se note que desapareció
  actualizarLista();

  // 6) Si ya no queda nadie, deshabilitar el botón de sorteo (opcional)
  if (amigos.length === 0) {
    document.querySelector('button[aria-label="Sortear amigo secreto"]').disabled = true;
 
}
