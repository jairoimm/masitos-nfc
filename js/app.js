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
                    <button class="add-btn" onclick='manejarBotonAgregar(${JSON.stringify(prod)})'>Agregar</button>
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
                    <button class="add-btn" onclick='manejarBotonAgregar(${JSON.stringify(promo)})'>Agregar</button>
                </div>
            </div>
        </div>
    `).join("");
}

/* ==========================================
   3. MODAL DE INGREDIENTES INTERACTIVO
   ========================================== */
function manejarBotonAgregar(prod) {
    const categoriasConIngredientes = ['pizza', 'fajita', 'empanada', 'supremas'];
    const requiereIngredientes = categoriasConIngredientes.includes(prod.categoria) || prod.nombre.toLowerCase().includes('armalo') || prod.nombre.toLowerCase().includes('armala');

    if (requiereIngredientes && typeof ingredientesDisponibles !== 'undefined') {
        abrirModalIngredientes(prod);
    } else {
        agregarAlCarrito(prod);
    }
}

function abrirModalIngredientes(prod) {
    let modalContainer = document.getElementById("ingredient-modal-container");
    if (!modalContainer) {
        modalContainer = document.createElement("div");
        modalContainer.id = "ingredient-modal-container";
        document.body.appendChild(modalContainer);
    }

    let tituloInstruccion = "Selecciona tus ingredientes a elección:";
    if (prod.categoria === 'pizza' || prod.categoria === 'fajita') {
        tituloInstruccion = "Selecciona tus ingredientes (Proteínas y Vegetales):";
    } else if (prod.categoria === 'empanada') {
        tituloInstruccion = "Selecciona tus ingredientes para la empanada:";
    } else if (prod.categoria === 'supremas') {
        tituloInstruccion = "Selecciona 1 ingrediente adicional para tus Supremas:";
    }

    modalContainer.innerHTML = `
        <div class="modal-overlay" id="modal-ingredientes">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Personalizar: ${prod.nombre}</h3>
                    <button class="modal-close" onclick="cerrarModalIngredientes()">&times;</button>
                </div>
                <div class="modal-instructions">
                    <i class="fa-solid fa-info-circle"></i> ${tituloInstruccion}
                </div>
                
                ${ingredientesDisponibles.proteinas && ingredientesDisponibles.proteinas.length > 0 ? `
                <div>
                    <div class="ingredient-section-title">Proteínas / Carnes</div>
                    <div class="ingredient-options">
                        ${ingredientesDisponibles.proteinas.map(ing => `
                            <label class="ingredient-label">
                                <input type="checkbox" name="ingrediente" value="${ing}"> ${ing}
                            </label>
                        `).join("")}
                    </div>
                </div>
                ` : ''}

                ${ingredientesDisponibles.vegetales && ingredientesDisponibles.vegetales.length > 0 ? `
                <div>
                    <div class="ingredient-section-title">Vegetales / Varios</div>
                    <div class="ingredient-options">
                        ${ingredientesDisponibles.vegetales.map(ing => `
                            <label class="ingredient-label">
                                <input type="checkbox" name="ingrediente" value="${ing}"> ${ing}
                            </label>
                        `).join("")}
                    </div>
                </div>
                ` : ''}

                ${ingredientesDisponibles.quesosCrema && ingredientesDisponibles.quesosCrema.length > 0 ? `
                <div>
                    <div class="ingredient-section-title">Quesos y Cremas</div>
                    <div class="ingredient-options">
                        ${ingredientesDisponibles.quesosCrema.map(ing => `
                            <label class="ingredient-label">
                                <input type="checkbox" name="ingrediente" value="${ing}"> ${ing}
                            </label>
                        `).join("")}
                    </div>
                </div>
                ` : ''}

                <button class="main-btn btn-primary-red" style="margin-top: 10px; justify-content: center;" onclick='confirmarIngredientes(${JSON.stringify(prod)})'>
                    Confirmar y Agregar al Carrito
                </button>
            </div>
        </div>
    `;
}

function cerrarModalIngredientes() {
    const modalContainer = document.getElementById("ingredient-modal-container");
    if (modalContainer) modalContainer.innerHTML = "";
}

function confirmarIngredientes(prod) {
    const checkboxes = document.querySelectorAll("input[name='ingrediente']:checked");
    const seleccionados = Array.from(checkboxes).map(cb => cb.value);

    if (seleccionados.length === 0) {
        alert("Por favor selecciona al menos un ingrediente.");
        return;
    }

    const productoPersonalizado = {
        ...prod,
        ingredientesSeleccionados: seleccionados
    };

    agregarAlCarrito(productoPersonalizado);
    cerrarModalIngredientes();
}

/* ==========================================
   4. VISTA DE CARRITO Y CHECKOUT WHATSAPP
   ========================================== */
function inicializarCarritoView() {
    renderizarItemsCarrito();

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

    container.innerHTML = carrito.map(item => {
        const itemId = item.cartItemId || item.id;
        const ingredientesHtml = item.ingredientesSeleccionados && item.ingredientesSeleccionados.length > 0 
            ? `<div style="font-size: 0.78rem; color: #ff9998; margin-top: 3px;">Ingredientes: ${item.ingredientesSeleccionados.join(', ')}</div>` 
            : '';

        return `
        <div class="cart-item-card">
            <div class="cart-item-details">
                <span class="cart-item-title">${item.nombre}</span>
                ${ingredientesHtml}
                <span class="cart-item-price">$${(item.precio * item.cantidad).toLocaleString('es-CL')} ($${item.precio.toLocaleString('es-CL')} c/u)</span>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="cambiarCantidad('${itemId}', -1); renderizarItemsCarrito();">-</button>
                <span class="qty-number">${item.cantidad}</span>
                <button class="qty-btn" onclick="cambiarCantidad('${itemId}', 1); renderizarItemsCarrito();">+</button>
                <button class="remove-item-btn" onclick="eliminarDelCarrito('${itemId}'); renderizarItemsCarrito();" title="Eliminar">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    `;
    }).join("");

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
        if (item.ingredientesSeleccionados && item.ingredientesSeleccionados.length > 0) {
            mensaje += `  Ingredientes: ${item.ingredientesSeleccionados.join(', ')}\n`;
        }
    });

    mensaje += `\nTotal estimado: $${total.toLocaleString('es-CL')}\n`;
    
    if (comentarios) {
        mensaje += `\nComentarios:\n${comentarios}\n`;
    }

    mensaje += `\nGracias.`;

    const telefonoWhatsApp = "56936795602";
    const urlWhatsApp = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    // Abrir WhatsApp
    window.open(urlWhatsApp, "_blank");

    // Limpiar carrito y volver al inicio
    guardarCarrito([]);
    window.location.href = "index.html";
}
