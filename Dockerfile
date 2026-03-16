# 1) Build stage: Compile assets menggunakan Bun
FROM oven/bun:1-alpine AS builder
WORKDIR /app

# Copy manifest untuk layer caching yang optimal
COPY bun.lockb package.json ./
RUN bun install

# Copy source code dan jalankan build
COPY . .
ENV NODE_ENV=production
RUN bun run build

# 2) Runtime stage: Sajikan file menggunakan Nginx
FROM nginx:alpine

# Buat konfigurasi Nginx inline agar mendukung React Router (mencegah 404 saat refresh)
RUN printf 'server {\n\
    listen 80;\n\
    location / {\n\
        root /usr/share/nginx/html;\n\
        index index.html;\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
}' > /etc/nginx/conf.d/default.conf

# Salin hasil build dari tahap builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Nginx akan berjalan secara otomatis dari base image