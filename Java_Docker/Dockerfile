# Usa la imagen oficial de OpenJDK
FROM openjdk:11

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo compilado .class al directorio de trabajo del contenedor
COPY src/RandomNumberGenerator.class .

# Comando para ejecutar la aplicación
CMD ["java", "RandomNumberGenerator"]
