# Utilisation d'une image de node.js en tant que base
FROM node:21

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le package.json et le package-lock.json pour installer les dépendances
COPY ./music-hall-back/package*.json ./

# Installer les dépendances
RUN npm install

# Installation de nodemon
RUN npm install -g nodemon

# Copier le reste des fichiers de l'application
COPY ./music-hall-back .

# Exposer le port sur lequel l'application fonctionne
EXPOSE 8008

# Commande pour démarrer l'application
CMD ["nodemon", "src/index.js"]