
# Build stage
FROM node:18 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Runtime stage
FROM nginx:alpine
COPY --from=build /app/dist/task-management-frontend /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
