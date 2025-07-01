// Mostrar módulo dinámico al hacer clic
function mostrarModulo(moduloId) {
  const modulos = document.querySelectorAll(".modulo");
  modulos.forEach(mod => mod.classList.add("oculto"));

  const activo = document.getElementById(moduloId);
  if (activo) activo.classList.remove("oculto");
}

// Cerrar sesión con confirmación
document.addEventListener("DOMContentLoaded", function () {
  const btnCerrar = document.getElementById("btnCerrarSesion");

  if (btnCerrar) {
    btnCerrar.addEventListener("click", function () {
      const confirmar = confirm("¿Está seguro que desea cerrar sesión?");
      if (confirmar) {
        console.log("🔒 Sesión cerrada.");
        window.location.href = "login.html";
      } else {
        console.log("❌ Cierre de sesión cancelado.");
      }
    });
  }
});
