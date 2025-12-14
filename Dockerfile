# 빌드 단계
FROM node:lts AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG PROFILE=prod
RUN npm run ${PROFILE}

# 배포 단계
FROM nginx:alpine
#ENV NODE_OPTIONS=--max_old_space_size=800
ARG PROFILE=prod
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx-${PROFILE}.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]