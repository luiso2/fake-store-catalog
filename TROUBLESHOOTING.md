# Solución de Problemas - EasyPanel

## El error "Service is not reachable"

Este error ocurre cuando el servicio está corriendo pero no es accesible desde el exterior. Aquí están las soluciones:

### Solución 1: Actualizar el Dockerfile (Recomendado)

Ya he actualizado el Dockerfile principal para que `serve` escuche en todas las interfaces:

1. **Haz commit y push de los cambios:**
```bash
git add Dockerfile
git commit -m "Fix: Update serve to listen on all interfaces"
git push
```

2. **En EasyPanel:**
   - Ve a tu aplicación
   - Haz clic en "Redeploy"

### Solución 2: Usar Nginx (Alternativa)

Si el problema persiste, puedes usar el Dockerfile con nginx:

1. **En EasyPanel, ve a la configuración de Build:**
   - Cambia el Dockerfile Path de `./Dockerfile` a `./Dockerfile.nginx`
   - Cambia el puerto de `3000` a `80`

2. **Haz commit y push:**
```bash
git add Dockerfile.nginx nginx.conf
git commit -m "Add nginx configuration"
git push
```

3. **Redeploy la aplicación**

### Verificar la Configuración en EasyPanel

Asegúrate de que estas configuraciones estén correctas:

1. **Puerto y Protocolo:**
   - Puerto: `3000` (o `80` si usas nginx)
   - Protocolo: `HTTP`

2. **Network:**
   - "Expose to Internet" debe estar habilitado
   - El dominio debe estar configurado correctamente

3. **Health Check (si está disponible):**
   - Path: `/`
   - Expected Status: `200`

### Comandos de Debugging

Si el problema persiste, puedes usar estos comandos en la terminal de EasyPanel:

```bash
# Ver los procesos corriendo
ps aux

# Ver los puertos en uso
netstat -tulpn

# Ver los logs de serve
npm list -g serve

# Probar la aplicación internamente
curl http://localhost:3000
```

### Solución 3: Configuración Manual de Red

Si ninguna de las anteriores funciona, en EasyPanel:

1. Ve a **Advanced Settings**
2. En **Port Mapping**, asegúrate de que esté configurado:
   - Container Port: `3000`
   - Published Port: `3000` (o dejar vacío para auto)
   - Protocol: `TCP`

3. En **Environment Variables**, verifica que exista:
   - `VITE_API_URL=https://fakestoreapi.com`

### Verificar el Estado

Después de hacer los cambios:

1. Espera a que el deploy termine completamente
2. Verifica en los logs que aparezca:
   - Con serve: `Accepting connections at http://0.0.0.0:3000`
   - Con nginx: `nginx: ready to accept connections`

3. El indicador de estado debe cambiar a verde

### Si Todo Falla

Puedes intentar:

1. **Eliminar y recrear la aplicación** en EasyPanel
2. **Usar el dominio temporal** que proporciona EasyPanel antes de configurar uno personalizado
3. **Verificar el firewall** del servidor donde está instalado EasyPanel

El problema más común es que `serve` esté escuchando solo en localhost. Con los cambios realizados, debería funcionar correctamente.
