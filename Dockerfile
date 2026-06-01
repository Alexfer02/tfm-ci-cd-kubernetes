FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

ARG GIT_SHA=unknown
ARG APP_VERSION=dev

ENV GIT_SHA=$GIT_SHA
ENV APP_VERSION=$APP_VERSION
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]