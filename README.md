# Pizzería Masitos - Aplicación Web NFC & QR

Aplicación web interactiva, moderna y responsive desarrollada para **Pizzería Masitos**, optimizada para ser utilizada mediante **Stickers NFC** y **Códigos QR** ubicados dentro del local.

Diseñada bajo una estética *mobile-first* de nivel prémium (inspirada en Uber Eats, PedidosYa, Rappi y Apple Design), con compatibilidad total para **GitHub Pages**.

---

## 🚀 Características Principales

1. **Landing Page (Inicio)**:
   - Logo circular oficial de Masitos e imagen hero artesanal.
   - Eslogan *"Sabor que une"* y accesos directos principales.
   - Enlaces directos a Redes Sociales (Facebook e Instagram) y reseñas de Google.

2. **Menú Digital Completo (Menú Real)**:
   - **Pizzas Artesanales** (Individual, Mediana, Familiar) con selección de ingredientes (Proteínas y Vegetales).
   - **Pan de Ajo** (con o sin queso en múltiples tamaños).
   - **Fajitas / Tortilla Burrera**.
   - **Empanadas Fritas de 20cm** (Normal, Premium con camarón/lomo/pollo/tocino, Queso, Mechada Queso).
   - **Frituras** (Papas fritas, aros de cebolla, nuggets, salchipapas, empanaditas, Box Masitos).
   - **Papas Supremas** y **Pollito Crispy** (Alitas y Filetillos).
   - **Vienesas / Completos** e italianos.
   - **Churrascos & Mechadas (Posta Rosada)** y **Sandwiches de Filetillo Crispy**.
   - **Hamburguesas** artesanales.

3. **Promociones**:
   - Sección exclusiva con la promoción oficial: **2 Pizzas 32cm a $10.000** (Pepperoni, Tomate - Jamón).

4. **Carrito de Compras y Pedidos**:
   - Icono flotante persistente con contador de artículos.
   - Gestión completa con `LocalStorage`.
   - Controles de cantidad (`[-]` / `[+]`) y eliminación de productos.
   - Formulario de datos del cliente con selección de **Delivery** o **Retiro en local** (dirección condicional).
   - **Generador automático de pedidos por WhatsApp** (`https://wa.me/`).

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** (Semántico y accesible)
- **CSS3** (Variables CSS, Flexbox, Grid, diseño Mobile-First)
- **JavaScript Vanilla** (Sin frameworks ni librerías pesadas)
- **LocalStorage API** (Para persistencia del carrito de compras)
- **FontAwesome & Google Fonts (Poppins)**

---

## 📂 Estructura del Proyecto

```text
masitos_nfc/
│
├── index.html          # Landing Page principal
├── menu.html           # Menú digital y categorías
├── promociones.html    # Promociones especiales
├── carrito.html        # Carrito y formulario de checkout
│
├── css/
│   └── styles.css      # Estilos visuales de la aplicación
│
├── js/
│   ├── data.js         # Base de datos de productos e ingredientes
│   ├── carrito.js      # Lógica de LocalStorage y carrito
│   └── app.js          # Controladores de UI, filtros y WhatsApp
│
└── assets/
    └── masitos logo.jpeg # Logotipo oficial de la pizzería
```

---

## 🌐 Instrucciones para Despliegue en GitHub Pages

Este proyecto es una aplicación estática lista para producción, por lo que su despliegue en **GitHub Pages** es inmediato y directo:

1. Sube todos los archivos del repositorio a tu cuenta de GitHub (asegúrate de que `index.html` esté en la raíz).
2. En tu repositorio de GitHub, ve a **Settings** > **Pages**.
3. En la sección **Build and deployment**, selecciona la rama principal (`main` o `master`) y la carpeta raíz (`/ (root)`).
4. Haz clic en **Save**. ¡Listo! GitHub te proporcionará la URL pública para asociarla a tus stickers NFC y códigos QR.
