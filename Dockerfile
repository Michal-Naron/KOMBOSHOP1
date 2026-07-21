# Etap 1: budowanie aplikacji React
# Obraz Debian slim omija znany problem npm występujący w części obrazów Alpine.
FROM node:20-bookworm-slim AS build
WORKDIR /app

ENV NPM_CONFIG_REGISTRY=https://registry.npmjs.org/

COPY package*.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build

# Etap 2: serwowanie gotowej strony przez Nginx
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
