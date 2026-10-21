FROM node:24-bookworm-slim@sha256:8cabefbd444809cf0e319b5831c65da1ea202200ca552a5e75fd7938a6f86658 AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build
FROM scratch AS artifact
COPY --from=build /app/.next/standalone/ /
COPY --from=build /app/public/ /public/
COPY --from=build /app/.next/static/ /.next/static/
