document.addEventListener("DOMContentLoaded", function () {
    const btnCerrar = document.getElementById("btnCerrarSesion");

    if (btnCerrar) {
        btnCerrar.addEventListener("click", function () {
            console.log("🔒 Sesión cerrada.");
            window.location.href = "login.html";
        });
    }
});

// Mostrar módulo dinámico al hacer clic
function mostrarModulo(moduloId) {
  const modulos = document.querySelectorAll(".modulo");
  modulos.forEach(mod => mod.classList.add("oculto"));

  const activo = document.getElementById(moduloId);
  if (activo) activo.classList.remove("oculto");
}

// Cerrar sesión
document.addEventListener("DOMContentLoaded", function () {
  const btnCerrar = document.getElementById("btnCerrarSesion");

  if (btnCerrar) {
    btnCerrar.addEventListener("click", function () {
      console.log("🔒 Sesión cerrada.");
      window.location.href = "login.html";
    });
  }
});
