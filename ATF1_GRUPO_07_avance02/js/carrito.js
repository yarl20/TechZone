document.addEventListener('DOMContentLoaded', () => {
  const listaCarrito = document.getElementById('lista-carrito');
  const totalCarrito = document.getElementById('total');
  const btnVaciar = document.getElementById('vaciar-carrito');

  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  function calcularTotal() {
    return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }

  function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    carrito.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('product-card');
      div.innerHTML = `
        <img src="${item.imagen}" alt="${item.nombre}" />
        <h4>${item.nombre}</h4>
        <p class="precio">S/ ${(item.precio).toFixed(2)}</p>
        <p>Cantidad: ${item.cantidad}</p>
        <p>Subtotal: S/ ${(item.precio * item.cantidad).toFixed(2)}</p>
      `;
      listaCarrito.appendChild(div);
    });
    totalCarrito.textContent = `Total: S/ ${calcularTotal().toFixed(2)}`;
  }

  btnVaciar.addEventListener('click', () => {
    carrito = [];
    localStorage.removeItem('carrito');
    actualizarCarrito();
  });

  actualizarCarrito();
});
