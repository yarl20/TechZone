function mostrarModulo(moduloId) {
  const modulos = document.querySelectorAll(".modulo");
  modulos.forEach(mod => mod.classList.add("oculto"));

  const activo = document.getElementById(moduloId);
  if (activo) activo.classList.remove("oculto");
}

document.addEventListener("DOMContentLoaded", function () {
  const btnCerrar = document.getElementById("btnCerrarSesion");
  const dialog = document.getElementById("dialogCerrarSesion");
  const btnConfirmar = document.getElementById("btnConfirmarCerrar");
  const btnCancelar = document.getElementById("btnCancelarCerrar");

  if (btnCerrar && dialog) {
    btnCerrar.addEventListener("click", () => {
      dialog.showModal(); // Mostrar ventana flotante
    });

    btnConfirmar.addEventListener("click", () => {
      console.log("🔒 Sesión cerrada.");
      dialog.close();
      window.location.href = "login.html";
    });

    btnCancelar.addEventListener("click", () => {
      console.log("❌ Cierre cancelado.");
      dialog.close();
    });
  }
});
