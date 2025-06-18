# FakeStore Catalog

Una aplicación web simple construida con React y Vite que consume la API de FakeStore para mostrar un catálogo de productos.

## Características

- 🛍️ Catálogo de productos con imágenes, precios y valoraciones
- 🔍 Filtrado por categorías
- 📱 Diseño responsive
- 🚀 Construido con Vite para un desarrollo rápido
- 🐳 Listo para Docker y despliegue en EasyPanel

## Tecnologías Utilizadas

- React 18
- Vite
- Axios para peticiones HTTP
- CSS moderno con variables CSS
- Docker para containerización

## Instalación Local

1. Clona el repositorio:
```bash
git clone [tu-repositorio]
cd easy-panel-sample
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` basándote en `.env.example`:
```bash
cp .env.example .env
```

4. Ejecuta el proyecto en modo desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Construcción para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

## Docker

### Construir la imagen:
```bash
docker build -t fakestore-catalog .
```

### Ejecutar el contenedor:
```bash
docker run -p 3000:3000 fakestore-catalog
```

La aplicación estará disponible en `http://localhost:3000`

## Despliegue en EasyPanel

1. **Crear un nuevo proyecto en EasyPanel**
   - Ve a tu dashboard de EasyPanel
   - Crea un nuevo proyecto

2. **Configurar el proyecto**
   - Selecciona "Deploy from GitHub"
   - Conecta tu repositorio
   - EasyPanel detectará automáticamente el Dockerfile

3. **Variables de Entorno**
   - En la configuración del proyecto, agrega:
     ```
     VITE_API_URL=https://fakestoreapi.com
     ```

4. **Configurar el Puerto**
   - Puerto: 3000
   - Protocolo: HTTP

5. **Dominio**
   - Puedes usar el dominio proporcionado por EasyPanel o configurar uno personalizado

6. **Deploy**
   - Haz clic en "Deploy"
   - EasyPanel construirá y desplegará tu aplicación automáticamente

## Estructura del Proyecto

```
easy-panel-sample/
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   └── ProductCard.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── .env.example
├── .gitignore
├── Dockerfile
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la construcción de producción

## API

La aplicación consume la [FakeStore API](https://fakestoreapi.com/), que proporciona:
- Lista de productos
- Categorías
- Detalles de productos incluyendo precios, imágenes y valoraciones

## Contribuir

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la licencia MIT.
