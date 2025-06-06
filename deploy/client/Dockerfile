# Base stage
FROM node:22-alpine AS base

# Stage 1: Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock ./

RUN --mount=type=cache,id=yarn-cache,target=/usr/local/share/.cache/yarn/v6 yarn install --check-cache

# Stage 2: Build the application
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN --mount=type=cache,id=yarn-cache,target=/usr/local/share/.cache/yarn/v6 \
    --mount=type=cache,id=next-build-cache,target=/app/.next/cache \
    yarn build


# Stage 3: Production server
FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

CMD HOSTNAME="0.0.0.0" NODE_OPTIONS='--no-warnings' node server.js