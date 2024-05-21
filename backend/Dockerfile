# Usa uma imagem do docker hub com a versão carbon do Node.js
FROM node:14
                                                                                      
# Variável de ambiente para deixar mais performatico o node
ENV NODE_ENV PROD

# Define qual diretório será usado para nossa aplicação dentro do container
WORKDIR /usr/src/app

# Install PM2
RUN npm i -g pm2

# Copia todos os arquivos que começam com package e tem extensão .json para o diretório definido acima
COPY package*.json process.yml ./

# Instala todas as dependências declaradas no package.json
RUN npm install

# Copia todos os arquivos da raiz da nossa aplicação para a pasta deinida no WORKDIR
COPY . .

# Expõe a porta 4000 do container
EXPOSE 4000

ENTRYPOINT ["pm2-runtime", "./process.yml"] 