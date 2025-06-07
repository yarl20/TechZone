let carrito = [];

function actualizarContador() {
  const contador = carrito.reduce((total, item) => total + item.cantidad, 0);
  document.getElementById('contador-carrito').textContent = contador;
}

function agregarAlCarrito(nombre, precio, imagen) {
  const productoExistente = carrito.find(item => item.nombre === nombre);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({ nombre, precio, cantidad: 1, imagen });
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarContador();
}

function cargarCarrito() {
  const carritoGuardado = localStorage.getItem('carrito');
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
  }
  actualizarContador();
}

document.addEventListener('DOMContentLoaded', () => {
  cargarCarrito();

  const botonesAgregar = document.querySelectorAll('.agregar-carrito');
  botonesAgregar.forEach(boton => {
    boton.addEventListener('click', () => {
      const card = boton.closest('.product-card');
      const nombreProducto = card.querySelector('h4').textContent;
      const precioTexto = card.querySelector('.precio').textContent.trim();
      const precioNum = parseFloat(precioTexto.replace('S/', '').replace(',', '.')) || 0;
      const imagen = card.querySelector('img').getAttribute('src');

      agregarAlCarrito(nombreProducto, precioNum, imagen);
    });
  });
});
