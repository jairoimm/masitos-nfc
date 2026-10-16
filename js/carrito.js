/* ==========================================
   PIZZERÍA MASITOS - LÓGICA DE CARRITO (LocalStorage)
   ========================================== */

function obtenerCarrito() {
    try {
        return JSON.parse(localStorage.getItem("masitos_carrito")) || [];
    } catch (e) {
        return [];
    }
}

function guardarCarrito(carrito) {
    localStorage.setItem("masitos_carrito", JSON.stringify(carrito));
    actualizarBadgesCarrito();
}

function agregarAlCarrito(producto) {
    const carrito = obtenerCarrito();
    const index = carrito.findIndex(item => item.id === producto.id);

    if (index !== -1) {
        carrito[index].cantidad += 1;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
    }

    guardarCarrito(carrito);
    
    // Feedback visual rápido
    mostrarToast(`¡${producto.nombre} agregado al carrito!`);
}

function cambiarCantidad(id, delta) {
    const carrito = obtenerCarrito();
    const index = carrito.findIndex(item => item.id === id);

    if (index !== -1) {
        carrito[index].cantidad += delta;
        if (carrito[index].cantidad <= 0) {
            carrito.splice(index, 1);
        }
    }

    guardarCarrito(carrito);
}

function eliminarDelCarrito(id) {
    let carrito = obtenerCarrito();
    carrito = carrito.filter(item => item.id !== id);
    guardarCarrito(carrito);
}

function calcularTotalCarrito() {
    const carrito = obtenerCarrito();
    return carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
}

function obtenerCantidadTotalItems() {
    const carrito = obtenerCarrito();
    return carrito.reduce((sum, item) => sum + item.cantidad, 0);
}

function actualizarBadgesCarrito() {
    const totalItems = obtenerCantidadTotalItems();
    const badges = document.querySelectorAll(".cart-badge, .floating-cart-badge");
    badges.forEach(badge => {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? "flex" : "none";
    });
}

function mostrarToast(mensaje) {
    // Toast notification sutil
    const existingToast = document.getElementById("toast-notification");
    if (existingToast) existingToast.remove();

    const toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.textContent = mensaje;
    toast.style.cssText = `
        position: fixed;
        bottom: 90px;
        left: 50%;
        transform: translateX(-50%);
        background: #E50914;
        color: #fff;
        padding: 10px 20px;
        border-radius: 30px;
        font-size: 0.9rem;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.5);
        animation: fadeInOut 2s ease forwards;
    `;
    
    document.body.appendChild(toast);
    setTimeout(() => {
        if (toast) toast.remove();
    }, 2000);
}

// Inicializar badges al cargar cualquier página
document.addEventListener("DOMContentLoaded", () => {
    actualizarBadgesCarrito();
});
