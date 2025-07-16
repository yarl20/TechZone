function validarCredenciales(usuario, contrasena) {
  return usuario === "admin@mail.com" && contrasena === "123456";
}

function validarUsuario() {
  const usuario = document.getElementById("usuario");
  const mensaje = document.getElementById("mensaje-error");

  if (!usuario.validity.valid) {
    mensaje.textContent = "Ingresa un correo válido.";
    return false;
  }

  mensaje.textContent = "";
  return true;
}

function validarPassword() {
  const contrasena = document.getElementById("contraseña");
  const mensaje = document.getElementById("mensaje-error");

  if (contrasena.value.length < 6) {
    mensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
    return false;
  }

  mensaje.textContent = "";
  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const mensajeError = document.getElementById("mensaje-error");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const usuario = document.getElementById("usuario").value;
      const contrasena = document.getElementById("contraseña").value;

      const usuarioValido = validarUsuario();
      const passValido = validarPassword();

      if (usuarioValido && passValido) {
        if (validarCredenciales(usuario, contrasena)) {
          mensajeError.textContent = "";
          window.location.href = "intranet.html";
        } else {
          mensajeError.textContent = "⚠️ Usuario o contraseña incorrectos.";
        }
      }
    });
  }
});
