function validarNombre() {
  const nombre = document.getElementById("nombre").value.trim();
  const mensaje = document.getElementById("mensaje-error");
  if (nombre.length < 3) {
    mensaje.textContent = "⚠️ El nombre debe tener al menos 3 caracteres.";
    return false;
  }
  mensaje.textContent = "";
  return true;
}

function validarEmail() {
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje-error");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    mensaje.textContent = "⚠️ Ingresa un correo electrónico válido.";
    return false;
  }
  mensaje.textContent = "";
  return true;
}

function validarMensaje() {
  const mensajeTexto = document.getElementById("mensaje").value.trim();
  const mensaje = document.getElementById("mensaje-error");
  if (mensajeTexto.length < 10) {
    mensaje.textContent = "⚠️ El mensaje debe tener al menos 10 caracteres.";
    return false;
  }
  mensaje.textContent = "";
  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formContacto");
  const dialogo = document.getElementById("confirmacion");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const validoNombre = validarNombre();
    const validoEmail = validarEmail();
    const validoMensaje = validarMensaje();

    if (validoNombre && validoEmail && validoMensaje) {
      dialogo.showModal(); // Mostrar ventana flotante
      formulario.reset();
    }
  });
});
