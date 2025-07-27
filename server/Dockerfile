# backend/Dockerfile

FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

# Install dev-only tools globally (or add to devDependencies)
RUN npm install -g ts-node-dev

# Copy all files after installing deps to leverage Docker caching
COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]
