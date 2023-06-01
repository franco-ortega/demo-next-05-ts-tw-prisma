## Dependencies & Setup

1. NextJS
   1. npx create-next-app@latest .
1. Prisma
   1. npm i prisma --save-dev
   1. npx prisma init --datasource-provider sqlite
1. Add .env to .gitignore
1. Create model in Prisma file
1. Migrate (update) database
   1. npx prisma migrate dev --name init
1. Add dev.db\* to gitignore
