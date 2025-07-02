document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector("form");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío tradicional

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    alert(
      `📩 Información enviada:\n\n👤 Nombre: ${nombre}\n📧 Email: ${email}\n📝 Mensaje: ${mensaje}`
    );
  });
});
