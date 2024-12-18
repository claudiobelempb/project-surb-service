## clear

- rm -rf .git

## start

- npm i --save @nestjs/platform-fastify
- npm i @nestjs/config
- npm i @nestjs/config
- npm i @faker-js/faker -D
- npm i uuid
- npm i @types/uuid -D
- npm i bcryptjs
- npm i @types/bcryptjs -D
- npm i dotenv-cli
- npm i class-transformer
- npm i class-validator

## Prisma

- npm i prisma -D
- npm i @prisma/client

- npx prisma init
- npx prisma generate --schema ./src/shared/infra/database/prisma/schema.prisma

- npx dotenv-cli -e .env.development -- npx prisma migrate reset --schema ./src/shared/infra/database/prisma/schema.prisma

- npx dotenv-cli -e .env.development -- npx prisma migrate dev --schema ./src/shared/infra/database/prisma/schema.prisma

- npx dotenv-cli -e .env.development -- npx prisma migrate test --schema ./src/shared/infra/database/prisma/schema.prisma

- npx dotenv-cli -e .env.development -- npx prisma migrate deploy --schema ./src/shared/infra/database/prisma/schema.prisma

## JWT

npm i @nestjs/jwt
npm i @nestjs/passport

npm i passport-jwt
npm i @types/passport-jwt -D

npm i passport-local
npm i @types/passport-local -D

## Docker

- docker compose up -d
- docker compose ps
