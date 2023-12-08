FROM node:16 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:1.21-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
