document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("menu-toggle");
  const menu = document.querySelector(".menu"); // Asegúrate que esto coincida con el HTML

  if (boton && menu) {
    boton.addEventListener("click", () => {
      menu.classList.toggle("activo");
      boton.textContent = menu.classList.contains("activo") ? "✖" : "☰";
    });
  }
});
