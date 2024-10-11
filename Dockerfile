# Usa una imagen de Node.js como base (Node 20 LTS)
FROM node:20.16.0 AS base

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y el yarn.lock para instalar las dependencias
COPY package*.json ./

# Instala las dependencias (aprovecha la caché)
RUN yarn install --frozen-lockfile

# Esta es la etapa de desarrollo
FROM base AS dev

# Configura el entorno como desarrollo
ENV NODE_ENV=development

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto que usa la aplicación
EXPOSE 4002

# Comando para iniciar la aplicación en modo desarrollo
CMD ["yarn", "dev"]
