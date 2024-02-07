FROM node:lts-alpine AS node-modules-builder
LABEL maintainer="Open Government Products"

ARG ENV=production
# Disables nextjs's default telemetry
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /usr/src/app

COPY . ./
# Installs additional pnpm dependency at build stage
RUN npm i -g pnpm@8

RUN CI=true pnpm i
# Recursively builds across all workspaces
RUN ENV=$ENV REACT_APP_ENV=$ENV pnpm -r build


FROM node:lts-alpine
WORKDIR /usr/src/app

# Installs additional pnpm dependency
RUN npm i -g pnpm

COPY --from=node-modules-builder /usr/src/app/frontend/.next/standalone/ ./
COPY --from=node-modules-builder /usr/src/app/frontend/.next/static ./.next/static
# Copy public folder which will be served by server.js
COPY --from=node-modules-builder /usr/src/app/frontend/public ./public

# Workaround for dealing with hoisted npm dependencies. 
# Next will automatically generate its own node_modules in standalone mode
COPY --from=node-modules-builder /usr/src/app/node_modules ./node_modules


EXPOSE 8080
CMD ["pnpm", "start"]