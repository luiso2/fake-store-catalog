# Pizzería Bella Italia - Catálogo Digital

Un catálogo digital moderno y elegante para pizzería, construido con React, Vite y diseñado para facilitar pedidos a través de WhatsApp.

## 🍕 Características

- **Catálogo Interactivo**: Navegación fluida por categorías (Pizzas, Bebidas, Postres, Entradas)
- **Carrito de Compras**: Sistema completo con gestión de cantidades
- **Integración WhatsApp**: Los pedidos se envían directamente por WhatsApp con el detalle completo
- **Diseño Responsive**: Optimizado para móviles, tablets y desktop
- **Animaciones Suaves**: Construido con Framer Motion para una experiencia premium
- **Tema Italiano**: Colores y diseño inspirados en la bandera italiana

## 🚀 Tecnologías

- **React 18** - Framework de UI
- **Vite** - Build tool ultrarrápido
- **Framer Motion** - Animaciones fluidas
- **Zustand** - Estado global simple
- **React Icons** - Iconografía consistente
- **Docker** - Containerización lista para producción

## 📱 Funcionalidades

### Para Clientes
- Ver menú completo con fotos y descripciones
- Filtrar por categorías
- Agregar productos al carrito
- Modificar cantidades
- Realizar pedido por WhatsApp con un click

### Para el Negocio
- Fácil actualización de productos
- Sin necesidad de procesar pagos
- Pedidos llegan directamente a WhatsApp
- Diseño profesional que mejora la imagen del negocio

## 🛠️ Instalación Local

1. **Clonar el repositorio**
```bash
git clone [tu-repositorio]
cd easy-panel-sample
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

## 🐳 Docker

### Construir imagen
```bash
docker build -t pizzeria-bella-italia .
```

### Ejecutar contenedor
```bash
docker run -p 3000:3000 pizzeria-bella-italia
```

## 📦 Despliegue en EasyPanel

1. **Preparar el código**
   - Hacer push a GitHub
   - Asegurarse que el Dockerfile esté en la raíz

2. **En EasyPanel**
   - Crear nueva aplicación
   - Conectar repositorio GitHub
   - Puerto: 3000
   - Variables de entorno: No requeridas

3. **Deploy**
   - EasyPanel detectará el Dockerfile automáticamente
   - Click en "Deploy"

## 📝 Personalización

### Cambiar datos del negocio

Editar `src/App.jsx`:
- Nombre del negocio
- Número de WhatsApp
- Horarios
- Información de contacto

### Modificar productos

Editar `src/data/pizzaData.js`:
- Agregar/eliminar productos
- Cambiar precios
- Actualizar descripciones
- Modificar categorías

### Cambiar colores

Editar `src/App.css`:
```css
:root {
  --primary-red: #c8102e;    /* Rojo italiano */
  --primary-green: #00a651;  /* Verde italiano */
  --secondary-yellow: #ffc72c; /* Amarillo acento */
}
```

## 🏗️ Estructura del Proyecto

```
pizzeria-bella-italia/
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Navegación principal
│   │   ├── CategoryFilter.jsx # Filtros de categoría
│   │   ├── ProductCard.jsx    # Tarjeta de producto
│   │   └── Cart.jsx          # Carrito de compras
│   ├── data/
│   │   └── pizzaData.js      # Datos de productos
│   ├── store/
│   │   └── useStore.js       # Estado global (Zustand)
│   ├── App.jsx               # Componente principal
│   └── App.css               # Estilos principales
├── public/
│   ├── pizza-icon.svg        # Favicon
│   └── pizza-hero.svg        # Imagen hero
├── Dockerfile                # Configuración Docker
├── package.json             # Dependencias
└── vite.config.js          # Configuración Vite
```

## 🎨 Capturas de Pantalla

### Desktop
- Hero section con información del negocio
- Grid de productos responsivo
- Carrito lateral deslizante

### Mobile
- Diseño optimizado para táctil
- Botón flotante de carrito
- Navegación simplificada

## 📞 Integración WhatsApp

El sistema genera automáticamente un mensaje con:
- Lista de productos ordenados
- Cantidades de cada producto
- Precio individual y total
- Mensaje de confirmación

Formato del mensaje:
```
🍕 *Pedido de Pizzería Bella Italia*

• Margherita Clásica x2
  R$ 91.80

• Coca-Cola Lata x3
  R$ 24.00

*Total: R$ 115.80*

Por favor, confirme mi pedido y el tiempo de entrega.
```

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `docker-compose up` - Ejecutar con Docker Compose

## 📄 Licencia

Este proyecto está bajo licencia MIT. Libre para uso comercial y personal.

## 🤝 Contribuciones

Las contribuciones son bienvenidas! Por favor:
1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 💡 Soporte

Para soporte o consultas:
- Abrir un issue en GitHub
- Contactar al desarrollador

---

Hecho con ❤️ para Pizzería Bella Italia
