function validarCredenciales(usuario, contrasena) {
    return usuario === "admin@mail.com" && contrasena === "123456";
}

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const mensajeError = document.getElementById("mensaje-error");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const usuario = document.getElementById("usuario").value;
            const contrasena = document.getElementById("contraseña").value;

            if (validarCredenciales(usuario, contrasena)) {
                console.log("✅ Credenciales válidas. Redirigiendo a intranet...");
                mensajeError.textContent = ""; // Limpiar errores
                window.location.href = "intranet.html";
            } else {
                console.error("❌ Credenciales no válidas. Intenta de nuevo.");
                mensajeError.textContent = "⚠️ Usuario o contraseña incorrectos.";
            }
        });
    }
});
