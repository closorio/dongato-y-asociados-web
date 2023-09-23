# ---- Construye la aplicación React ----
# Utiliza una imagen base de Node.js versión 19 en Alpine Linux 3.16 como etapa de construcción.
FROM node:19-alpine3.16 AS react-builder

# Establece el directorio de trabajo en /app en la etapa de construcción.
WORKDIR /app

# Copia el archivo package.json y package-lock.json de la carpeta saludofront-app en el directorio de trabajo.
COPY ./saludofront-app/package*.json ./

# Ejecuta npm ci para instalar las dependencias del proyecto React de forma eficiente y basada en package-lock.json.
RUN npm ci

# Copia todo el contenido de la carpeta saludofront-app en el directorio de trabajo.
COPY ./saludofront-app ./

# Ejecuta npm run build para construir la aplicación React. El resultado se almacenará en la carpeta "build".
RUN npm run build

# ---- Construye la aplicación Express ----
# Cambia la imagen base a otra instancia de Node.js versión 19 en Alpine Linux 3.16 para la aplicación Express.
FROM node:19-alpine3.16

# Establece el directorio de trabajo en /app para la segunda etapa de construcción.
WORKDIR /app

# Copia el archivo package.json y package-lock.json del directorio raíz del proyecto en el directorio de trabajo.
COPY package*.json ./

# Ejecuta npm ci para instalar las dependencias del proyecto Express de forma eficiente y basada en package-lock.json.
RUN npm ci

# Copia todo el contenido del directorio actual (que contiene la aplicación Express) al directorio de trabajo.
COPY . .

# Copia los archivos de la carpeta de construcción de la aplicación React (etapa anterior) en la carpeta "saludofront-app/dist" en la imagen actual.
COPY --from=react-builder /app/dist ./saludofront-app/dist

# Expone el puerto 4000 en el contenedor.
EXPOSE 4000

# Define el comando que se ejecutará cuando se inicie el contenedor, en este caso, ejecuta "node index.js" para iniciar la aplicación Express.
CMD ["node", "index.js"]

