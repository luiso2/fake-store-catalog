# Pizzería Bella Italia - Catálogo Digital Premium

Un catálogo digital moderno y elegante para pizzería con sistema de personalización de pizzas, construido con React, Vite y optimizado para móviles.

## 🍕 Nuevas Características v2.0

### 1. **Sistema de Personalización de Pizzas**
- Modal interactivo para agregar toppings/ingredientes extra
- 12 opciones de ingredientes adicionales
- Cálculo automático del precio con extras
- Vista previa del total antes de agregar al carrito

### 2. **Bottom Navigation Bar (Móvil)**
- Navegación fácil entre categorías
- Indicador visual de sección activa
- Badge con contador de items en el carrito
- Acceso rápido a todas las secciones

### 3. **Grid Optimizado para Móviles**
- Vista de 2 columnas en dispositivos móviles
- Mejor aprovechamiento del espacio
- Cards adaptados para pantallas pequeñas

### 4. **Experiencia Mejorada**
- Animaciones suaves con Framer Motion
- Estados de carga y vacío
- Feedback visual al agregar productos
- Modal de categorías en móvil

## 🚀 Tecnologías

- **React 18** - Framework de UI
- **Vite** - Build tool ultrarrápido
- **Framer Motion** - Animaciones profesionales
- **Zustand** - Gestión de estado
- **React Icons** - Iconografía consistente
- **Docker** - Containerización

## 📱 Funcionalidades Principales

### Sistema de Pedidos
- ✅ Catálogo completo con 4 categorías
- ✅ Personalización de pizzas con ingredientes extra
- ✅ Carrito de compras con gestión de cantidades
- ✅ Integración directa con WhatsApp
- ✅ Cálculo automático de totales

### Experiencia de Usuario
- ✅ Diseño 100% responsive
- ✅ Bottom Navigation en móviles
- ✅ Grid de 2 columnas en móvil
- ✅ Animaciones profesionales
- ✅ Tema italiano (colores de la bandera)

## 🛠️ Instalación

```bash
# Clonar repositorio
git clone [tu-repositorio]
cd easy-panel-sample

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build de producción
npm run build
```

## 🐳 Docker

```bash
# Construir imagen
docker build -t pizzeria-bella-italia .

# Ejecutar
docker run -p 3000:3000 pizzeria-bella-italia
```

## 📦 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx         # Navegación principal
│   ├── CategoryFilter.jsx # Filtros de categoría
│   ├── ProductCard.jsx    # Tarjeta de producto
│   ├── Cart.jsx          # Carrito de compras
│   ├── ToppingsModal.jsx # Modal de personalización
│   └── BottomNav.jsx     # Navegación móvil
├── data/
│   └── pizzaData.js      # Productos y toppings
├── store/
│   └── useStore.js       # Estado global
└── App.jsx               # Componente principal
```

## 🎨 Personalización

### 1. Cambiar Toppings/Ingredientes

Editar `src/data/pizzaData.js`:
```javascript
toppings: [
  { id: 'extra-cheese', name: 'Queso Extra', price: 8.00 },
  // Agregar más ingredientes aquí
]
```

### 2. Modificar Número de WhatsApp

Editar `src/components/Cart.jsx` (línea 39):
```javascript
const phoneNumber = '5541998908495' // Tu número
```

### 3. Cambiar Colores del Tema

Editar `src/App.css`:
```css
:root {
  --primary-red: #c8102e;
  --primary-green: #00a651;
  --secondary-yellow: #ffc72c;
}
```

### 4. Agregar/Modificar Productos

Editar `src/data/pizzaData.js`:
```javascript
{
  id: 1,
  name: "Pizza Margherita",
  description: "Descripción",
  price: 45.90,
  category: "pizzas",
  allowToppings: true // Permite personalización
}
```

## 📱 Capturas de Pantalla

### Desktop
- Hero section con información del negocio
- Grid de productos 3-4 columnas
- Carrito lateral deslizante
- Modal de personalización centrado

### Mobile
- Grid de 2 columnas
- Bottom Navigation fijo
- Modal de categorías
- Carrito a pantalla completa

## 🚀 Deploy en EasyPanel

1. **Push a GitHub**
```bash
git add .
git commit -m "Update: Pizza customization and mobile navigation"
git push origin main
```

2. **En EasyPanel**
- Redeploy la aplicación
- Puerto: 3000
- No requiere variables de entorno adicionales

## 📊 Mejoras de Performance

- Lazy loading de imágenes
- Code splitting por rutas
- Optimización de bundle
- Caché de assets estáticos
- Animaciones con GPU

## 🔄 Actualizaciones Futuras

- [ ] Sistema de cupones de descuento
- [ ] Múltiples tamaños de pizza
- [ ] Historial de pedidos
- [ ] Notificaciones push
- [ ] PWA support

## 🤝 Contribuciones

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/nueva-caracteristica`)
3. Commit cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

MIT License - Libre para uso comercial y personal

---

Hecho con ❤️ para Pizzería Bella Italia 🍕
