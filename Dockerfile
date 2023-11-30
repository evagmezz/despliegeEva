# Usa la imagen de Nginx como base
FROM nginx

# Copia el archivo estático al directorio de archivos de Nginx en la imagen
COPY index.html /usr/share/nginx/html
# Comando para iniciar Nginx cuando se inicie el contenedor
CMD ["nginx", "-g", "daemon off;"]