/* ==========================================
   PIZZERÍA MASITOS - BASE DE DATOS DEL MENÚ REAL
   ========================================== */

const productos = [
    // --- PIZZAS ARTESANALES ---
    {
        id: "p_ind",
        nombre: "Pizza Artesanal - Individual",
        categoria: "pizza",
        precio: 4990,
        descripcion: "Base de Queso, Salsa + 3 ingredientes (1 Proteína + 2 Vegetales).",
        imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "p_med",
        nombre: "Pizza Artesanal - Mediana",
        categoria: "pizza",
        precio: 8590,
        descripcion: "Base de Queso, Salsa + 3 ingredientes (1 Proteína + 2 Vegetales). ¡Lleva 2 por $15.990!",
        imagen: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "p_fam",
        nombre: "Pizza Artesanal - Familiar",
        categoria: "pizza",
        precio: 11990,
        descripcion: "Base de Queso, Salsa + 3 ingredientes (1 Proteína + 2 Vegetales). ¡Lleva 2 por $20.990!",
        imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60"
    },

    // --- PAN DE AJO ---
    {
        id: "pa_ind",
        nombre: "Pan de Ajo - Individual",
        categoria: "pan_ajo",
        precio: 3490,
        descripcion: "Crujiente pan de ajo artesanal. (Opcional con queso $3.990)",
        imagen: "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "pa_med",
        nombre: "Pan de Ajo - Mediano",
        categoria: "pan_ajo",
        precio: 5490,
        descripcion: "Pan de ajo tamaño mediano. (Opcional con queso $5.990)",
        imagen: "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "pa_fam",
        nombre: "Pan de Ajo - Familiar",
        categoria: "pan_ajo",
        precio: 7490,
        descripcion: "Pan de ajo tamaño familiar para compartir. (Opcional con queso $7.990)",
        imagen: "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=500&auto=format&fit=crop&q=60"
    },

    // --- FAJITAS ---
    {
        id: "f_burrera",
        nombre: "Tortilla Burrera (Fajita)",
        categoria: "fajita",
        precio: 3590,
        descripcion: "Base de lechuga, mayo + 3 ingredientes (1 Proteína + 2 Vegetales).",
        imagen: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&auto=format&fit=crop&q=60"
    },

    // --- EMPANADAS FRITAS 20cm ---
    {
        id: "emp_norm",
        nombre: "Empanada Normal 20cm",
        categoria: "empanada",
        precio: 2300,
        descripcion: "Base de Queso + 2 ingredientes normales.",
        imagen: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "emp_prem",
        nombre: "Empanada Premium 20cm",
        categoria: "empanada",
        precio: 2500,
        descripcion: "Base de Queso + 2 ingredientes Premium (Pollo, Tocino, Camarón, Lomo, Crema).",
        imagen: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "emp_queso",
        nombre: "Empanada de Queso",
        categoria: "empanada",
        precio: 1500,
        descripcion: "Clásica empanada frita rellena de doble queso fundido.",
        imagen: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "emp_mechada",
        nombre: "Empanada Mechada Queso",
        categoria: "empanada",
        precio: 2500,
        descripcion: "Carne mechada jugosa con queso fundido.",
        imagen: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=60"
    },

    // --- FRITURAS ---
    {
        id: "fr_papas",
        nombre: "Papas Fritas (Medianas)",
        categoria: "fritura",
        precio: 2800,
        descripcion: "Papas fritas crujientes. (También disponibles: Chico $1.500 | Grande $4.000 | Familiar $5.500)",
        imagen: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "fr_aros",
        nombre: "Aros de Cebolla (6 unidades)",
        categoria: "fritura",
        precio: 1500,
        descripcion: "Aros de cebolla rebozados y crujientes.",
        imagen: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "fr_nuggets",
        nombre: "Papas Nuggets",
        categoria: "fritura",
        precio: 3000,
        descripcion: "Nuggets de pollo crujientes acompañados de papas.",
        imagen: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "fr_salchi",
        nombre: "Salchi Papas",
        categoria: "fritura",
        precio: 3000,
        descripcion: "Papas fritas con rodajas de salchicha doraditas.",
        imagen: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "fr_empanaditas",
        nombre: "Empanaditas (3 unidades)",
        categoria: "fritura",
        precio: 1000,
        descripcion: "Mini empanaditas cóctel.",
        imagen: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "fr_box",
        nombre: "Box Masitos (Mixto)",
        categoria: "fritura",
        precio: 5490,
        descripcion: "Caja surtida con papas, nuggets, aros de cebolla y empanaditas.",
        imagen: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&auto=format&fit=crop&q=60"
    },

    // --- PAPAS SUPREMAS ---
    {
        id: "supremas",
        nombre: "Papas Supremas Masitos",
        categoria: "supremas",
        precio: 5290,
        descripcion: "Base de Cheddar, Tomate, Ciboulette + 1 ing a elegir (Pollo, Lomo, Molida, Champiñón, Tocino, Choclo).",
        imagen: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&auto=format&fit=crop&q=60"
    },

    // --- POLLITO CRISPY ---
    {
        id: "pc_alitas",
        nombre: "Alitas Crispy + Papas",
        categoria: "pollo",
        precio: 4690,
        descripcion: "Alitas de pollo crujientes con porción de papas fritas.",
        imagen: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "pc_filet",
        nombre: "Filetillo Crispy + Papas",
        categoria: "pollo",
        precio: 4690,
        descripcion: "Bastones de filetillo de pollo crujientes con papas fritas.",
        imagen: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "pc_alitas_solas",
        nombre: "5 Unidades Alitas Solas",
        categoria: "pollo",
        precio: 4290,
        descripcion: "Porción de 5 alitas crispy.",
        imagen: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "pc_filet_solos",
        nombre: "5 Unidades Filet Solos",
        categoria: "pollo",
        precio: 4290,
        descripcion: "Porción de 5 filetillos crispy.",
        imagen: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60"
    },

    // --- VIENESAS ---
    {
        id: "v_italiana",
        nombre: "Completo Italiano",
        categoria: "vienesa",
        precio: 1800,
        descripcion: "Vienesa, palta, tomate y mayo.",
        imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "v_completo",
        nombre: "Completo Tradicional",
        categoria: "vienesa",
        precio: 1600,
        descripcion: "Vienesa, tomate, chucrut, salsa americana y mayo.",
        imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "v_hotdog",
        nombre: "Hot Dog Simple",
        categoria: "vienesa",
        precio: 1400,
        descripcion: "Pan y vienesa con salsas a elección.",
        imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "v_armalo",
        nombre: "Vienesa Armala a tu Gusto",
        categoria: "vienesa",
        precio: 2500,
        descripcion: "Elige 3 ingredientes a tu gusto.",
        imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=500&auto=format&fit=crop&q=60"
    },

    // --- CHURRASCOS & MECHADAS (Posta Rosada) ---
    {
        id: "ch_estilo",
        nombre: "Churrasco (Italiano, Chacarero, Luco, Campesino)",
        categoria: "sandwich",
        precio: 3990,
        descripcion: "Posta rosada tierna. ¡Lleva 2 por $7.000!",
        imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "ch_armalo",
        nombre: "Churrasco Armalo a tu Gusto",
        categoria: "sandwich",
        precio: 4490,
        descripcion: "Carne de posta rosada + 3 ingredientes a elección.",
        imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "mech_estilo",
        nombre: "Mechada (Italiano, Chacarero, Luco, Campesino)",
        categoria: "sandwich",
        precio: 3990,
        descripcion: "Carne mechada jugosa. ¡Lleva 2 por $7.000!",
        imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60"
    },

    // --- SANDWICH DE FILETILLO CRISPY ---
    {
        id: "f_crispy_estilo",
        nombre: "Filetillo Crispy (Italiano, Chacarero, Luco, Campesino)",
        categoria: "sandwich",
        precio: 3490,
        descripcion: "Pollo crispy. ¡Lleva 2 por $6.000!",
        imagen: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "f_gloton",
        nombre: "Filetillo Glotón",
        categoria: "sandwich",
        precio: 3990,
        descripcion: "BbQ, Cheddar, Aros de Cebolla, Tocino y Pepinillo.",
        imagen: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "f_guaton",
        nombre: "Filetillo Guatón",
        categoria: "sandwich",
        precio: 3990,
        descripcion: "BbQ, Cheddar, Cebolla Frita, Tocino y Pepinillo.",
        imagen: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&auto=format&fit=crop&q=60"
    },

    // --- HAMBURGUESAS ---
    {
        id: "h_estilo",
        nombre: "Hamburguesa (Italiana, Chacarera, Luco, Campesina)",
        categoria: "hamburguesa",
        precio: 4000,
        descripcion: "Hamburguesa de vacuno con estilo a elección.",
        imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "h_masi",
        nombre: "Masi Burger",
        categoria: "hamburguesa",
        precio: 4500,
        descripcion: "Cebolla, Cheddar, Lechuga, Pepinillo y Salsa Masitos.",
        imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "h_cheddar",
        nombre: "Burger Cheddar",
        categoria: "hamburguesa",
        precio: 4000,
        descripcion: "Hamburguesa clásica con abundante Queso Cheddar fundido.",
        imagen: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60"
    }
];

const promociones = [
    {
        id: "promo1",
        nombre: "2 Pizzas 32cm",
        categoria: "promocion",
        descripcion: "Usted puede elegir entre estas variedades: Pepperoni, Tomate - Jamón. ¡Solo en Masitos!",
        precio: 10000,
        imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60"
    }
];

// Lista completa de ingredientes disponibles (extraída del menú real)
const ingredientesDisponibles = {
    vegetales: [
        "Tomate", "Ciboulette", "Pimentón verde", "Palta / Aguacate", 
        "Porotos verdes", "Cebolla morada", "Cebolla frita", "Champiñones", 
        "Choclo", "Piña", "Lechuga", "Pepinillos", "Aceitunas negras"
    ],
    proteinas: [
        "Pollo", "Carne picada / Molida", "Jamón", "Pepperoni", 
        "Salami", "Tocino", "Salchichas", "Atún", "Camarón", "Lomo", "Mechada"
    ],
    quesosCrema: [
        "Queso Muzzarella", "Queso Cheddar", "Crema"
    ]
};
