# Usa la imagen oficial de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente al directorio de trabajo del contenedor
COPY . .

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
