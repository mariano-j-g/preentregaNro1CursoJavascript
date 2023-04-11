// Función para generar un número entre 1 y 10
function generarNumero() {
  return Math.floor(Math.random() * 10) + 1;
}

// Función para jugar al juego
function jugar() {
  let numeroAdivinar = generarNumero();
  let intentos = 3;

  while (intentos > 0) {
    let numeroElegido = parseInt(prompt("INGRESA UN NUMERO DE 1 AL 10:"));

    if (numeroElegido === numeroAdivinar) {
      alert("¡LE PEGASTE DE PURO CULO, PERO GANASTE, MALDITA SEA TU SUERTE!");
      return;
    } else {
      intentos--;
      alert(
        "JA JA JA NUMERO INCORRECTO, ADELANTE VUELVE A ELEGIR, ESTOY SEGURO QUE PERDERAS. TE QUEDAN " +
          intentos +
          " INTENTOS."
      );
    }
  }

  alert(
    " JA JA JA TE MENTI, O NO VISTE QUE DECIA TE QUEDAN 0 INTENTOS?, ERA OBVIO QUE NO LO LOGRARIAS, MALDITO IGNARO. EL NUMERO ERA " +
      numeroAdivinar +
      "."
  );
}
