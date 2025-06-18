# Instrucciones de Despliegue en EasyPanel

## Pasos para desplegar en EasyPanel:

### 1. Preparar el Repositorio Git

Primero, inicializa el repositorio Git y sube el código a GitHub:

```bash
cd C:\Users\Andybeats\Desktop\Claude Projects\easy-panel-sample
git init
git add .
git commit -m "Initial commit - FakeStore Catalog"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/fakestore-catalog.git
git push -u origin main
```

### 2. Configurar en EasyPanel

1. **Accede a tu panel de EasyPanel**
   - Ve a https://easypanel.io o tu instalación de EasyPanel

2. **Crear Nueva Aplicación**
   - Haz clic en "New App"
   - Selecciona "GitHub" como fuente

3. **Conectar Repositorio**
   - Autoriza EasyPanel para acceder a tu GitHub si no lo has hecho
   - Selecciona el repositorio `fakestore-catalog`
   - Rama: `main`

4. **Configuración de Build**
   - Build Type: `Dockerfile`
   - Dockerfile Path: `./Dockerfile` (ya detectado automáticamente)
   - Context: `.` (raíz del proyecto)

5. **Configuración de Red**
   - Puerto: `3000`
   - Protocolo: `HTTP`
   - Habilitar "Expose to Internet"

6. **Variables de Entorno**
   En la sección de Environment Variables, agrega:
   ```
   VITE_API_URL=https://fakestoreapi.com
   ```

7. **Dominio**
   - Puedes usar el subdominio gratuito de EasyPanel
   - O configurar tu propio dominio personalizado

8. **Recursos** (Opcional)
   - CPU: 0.5 cores
   - RAM: 512 MB
   (Suficiente para esta aplicación)

### 3. Desplegar

1. Haz clic en "Deploy"
2. EasyPanel comenzará a:
   - Clonar tu repositorio
   - Construir la imagen Docker
   - Desplegar el contenedor
   - Configurar el proxy inverso

### 4. Verificar el Despliegue

- El proceso tomará unos minutos
- Puedes ver los logs en tiempo real
- Una vez completado, tu aplicación estará disponible en el dominio configurado

### Actualizar la Aplicación

Para futuras actualizaciones:

1. Haz cambios en tu código local
2. Commit y push a GitHub:
   ```bash
   git add .
   git commit -m "Update: [descripción]"
   git push
   ```
3. En EasyPanel:
   - Ve a tu aplicación
   - Haz clic en "Redeploy"
   - O activa "Auto Deploy" para despliegues automáticos

### Solución de Problemas

**Si la aplicación no carga:**
- Verifica los logs en EasyPanel
- Asegúrate de que el puerto 3000 esté configurado
- Verifica que las variables de entorno estén configuradas

**Si hay errores de build:**
- Revisa que el Dockerfile esté correcto
- Verifica que todas las dependencias estén en package.json

**Para debugging:**
- Puedes acceder a la terminal del contenedor desde EasyPanel
- Revisa los logs de la aplicación

### Configuración Avanzada

**SSL/HTTPS:**
- EasyPanel proporciona certificados SSL gratuitos automáticamente
- Solo activa "Force HTTPS" en la configuración

**Backups:**
- Configura backups automáticos en EasyPanel si lo necesitas

**Escalamiento:**
- Puedes aumentar los recursos desde el panel
- Para múltiples instancias, considera usar un load balancer

## Comandos Útiles para Desarrollo Local

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Docker local
docker build -t fakestore-catalog .
docker run -p 3000:3000 fakestore-catalog

# Docker Compose
docker-compose up
```
