/* ==========================================
   PIZZERÍA MASITOS - APLICACIÓN PRINCIPAL (JS Vanilla)
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Detectar en qué página estamos y renderizar según corresponda
    const path = window.location.pathname;

    if (path.includes("menu.html")) {
        inicializarMenu();
    } else if (path.includes("promociones.html")) {
        inicializarPromociones();
    } else if (path.includes("carrito.html")) {
        inicializarCarritoView();
    }
});

/* ==========================================
   1. RENDERIZADO DEL MENÚ
   ========================================== */
function inicializarMenu() {
    renderizarProductos(productos);

    // Filtros por categoría
    const chips = document.querySelectorAll(".cat-chip");
    chips.forEach(chip => {
        chip.addEventListener("click", (e) => {
            chips.forEach(c => c.classList.remove("active"));
            e.target.classList.add("active");

            const categoria = e.target.getAttribute("data-categoria");
            if (categoria === "todos") {
                renderizarProductos(productos);
            } else {
                const filtrados = productos.filter(p => p.categoria === categoria);
                renderizarProductos(filtrados);
            }
        });
    });
}

function renderizarProductos(lista) {
    const container = document.getElementById("productos-list");
    if (!container) return;

    if (lista.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:#888; padding:30px;">No hay productos en esta categoría.</p>`;
        return;
    }

    container.innerHTML = lista.map(prod => `
        <div class="product-card">
            <img src="${prod.imagen}" alt="${prod.nombre}" class="product-img" onerror="this.src='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60'">
            <div class="product-info">
                <h3 class="product-name">${prod.nombre}</h3>
                <p class="product-desc">${prod.descripcion}</p>
                <div class="product-footer">
                    <span class="product-price">$${prod.precio.toLocaleString('es-CL')}</span>
                    <button class="add-btn" onclick='agregarAlCarrito(${JSON.stringify(prod)})'>Agregar</button>
                </div>
            </div>
        </div>
    `).join("");
}

/* ==========================================
   2. RENDERIZADO DE PROMOCIONES
   ========================================== */
function inicializarPromociones() {
    const container = document.getElementById("promos-list");
    if (!container) return;

    container.innerHTML = promociones.map(promo => `
        <div class="product-card">
            <img src="${promo.imagen}" alt="${promo.nombre}" class="product-img" onerror="this.src='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60'">
            <div class="product-info">
                <h3 class="product-name">${promo.nombre}</h3>
                <p class="product-desc">${promo.descripcion}</p>
                <div class="product-footer">
                    <span class="product-price">$${promo.precio.toLocaleString('es-CL')}</span>
                    <button class="add-btn" onclick='agregarAlCarrito(${JSON.stringify(promo)})'>Agregar</button>
                </div>
            </div>
        </div>
    `).join("");
}

/* ==========================================
   3. VISTA DE CARRITO Y CHECKOUT WHATSAPP
   ========================================== */
function inicializarCarritoView() {
    renderizarItemsCarrito();

    // Manejar visibilidad de dirección según tipo de entrega
    const tipoEntregaRadios = document.querySelectorAll("input[name='tipoEntrega']");
    const grupoDireccion = document.getElementById("grupo-direccion");

    tipoEntregaRadios.forEach(radio => {
        radio.addEventListener("change", (e) => {
            if (e.target.value === "Delivery") {
                grupoDireccion.style.display = "flex";
                document.getElementById("direccion").setAttribute("required", "true");
            } else {
                grupoDireccion.style.display = "none";
                document.getElementById("direccion").removeAttribute("required");
            }
        });
    });

    // Manejar envío de pedido
    const form = document.getElementById("checkout-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            enviarPedidoWhatsApp();
        });
    }
}

function renderizarItemsCarrito() {
    const container = document.getElementById("cart-items-container");
    const subtotalEl = document.getElementById("summary-subtotal");
    const totalEl = document.getElementById("summary-total");
    const emptyState = document.getElementById("cart-empty");
    const formSection = document.getElementById("checkout-section");

    if (!container) return;

    const carrito = obtenerCarrito();

    if (carrito.length === 0) {
        container.innerHTML = "";
        if (emptyState) emptyState.style.display = "block";
        if (formSection) formSection.style.display = "none";
        if (subtotalEl) subtotalEl.textContent = "$0";
        if (totalEl) totalEl.textContent = "$0";
        return;
    }

    if (emptyState) emptyState.style.display = "none";
    if (formSection) formSection.style.display = "block";

    container.innerHTML = carrito.map(item => `
        <div class="cart-item-card">
            <div class="cart-item-details">
                <span class="cart-item-title">${item.nombre}</span>
                <span class="cart-item-price">$${(item.precio * item.cantidad).toLocaleString('es-CL')} ($${item.precio.toLocaleString('es-CL')} c/u)</span>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="cambiarCantidad('${item.id}', -1)">-</button>
                <span class="qty-number">${item.cantidad}</span>
                <button class="qty-btn" onclick="cambiarCantidad('${item.id}', 1)">+</button>
                <button class="remove-item-btn" onclick="eliminarDelCarrito('${item.id}'); renderizarItemsCarrito();" title="Eliminar">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    `).join("");

    const total = calcularTotalCarrito();
    if (subtotalEl) subtotalEl.textContent = `$${total.toLocaleString('es-CL')}`;
    if (totalEl) totalEl.textContent = `$${total.toLocaleString('es-CL')}`;
}

function enviarPedidoWhatsApp() {
    const carrito = obtenerCarrito();
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    const nombre = document.getElementById("nombre-cliente").value.trim();
    const tipoEntrega = document.querySelector("input[name='tipoEntrega']:checked").value;
    const direccion = tipoEntrega === "Delivery" ? document.getElementById("direccion").value.trim() : "Retira en local";
    const comentarios = document.getElementById("comentarios").value.trim();
    const total = calcularTotalCarrito();

    let mensaje = `Hola. Pizzería Masitos,\n\n`;
    mensaje += `Nombre: ${nombre}\n`;
    mensaje += `Tipo de entrega: ${tipoEntrega}\n`;
    
    if (tipoEntrega === "Delivery") {
        mensaje += `Dirección:\n${direccion}\n`;
    }
    
    mensaje += `\nPedido:\n`;
    carrito.forEach(item => {
        mensaje += `▪ ${item.nombre} x${item.cantidad}\n`;
    });

    mensaje += `\nTotal estimado: $${total.toLocaleString('es-CL')}\n`;
    
    if (comentarios) {
        mensaje += `\nComentarios:\n${comentarios}\n`;
    }

    mensaje += `\nGracias.`;

    // Número de WhatsApp de la pizzería (configurable, ej: 56912345678)
    const telefonoWhatsApp = "56936795602";
    const urlWhatsApp = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    // Vaciar carrito opcionalmente o abrir WhatsApp
    window.open(urlWhatsApp, "_blank");
}
