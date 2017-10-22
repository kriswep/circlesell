[![Build Status](https://travis-ci.org/kriswep/graphql-testdrive.svg?branch=master)](https://travis-ci.org/kriswep/graphql-testdrive) [![codecov](https://codecov.io/gh/kriswep/graphql-testdrive/branch/master/graph/badge.svg)](https://codecov.io/gh/kriswep/graphql-testdrive)

# graphql-testdrive

Just taking graphql with apollos grahpql-tools for a testdrive. Using a sequelize backend for data persisting

Let's see...

## Scripts

Create new model (and migration): `npm run db:createModel -- --name Model --attributes field1:string,field2:string`
Create new migration: `npm run db:createMigration -- --name migration-name`
Run migrations: `npm run db:migrate`
Undo migrations: `npm run db:migrate:undo`
Create new seed: `npm run db:createSeed -- --name Seed`
Seed DB: `npm run db:seed`
Unseed DB: `npm run db:seed:undo`


### Note
In order to test the authentication in graphiql, you need a graphiql app which lets you set headers, e.g https://github.com/skevy/graphiql-app


