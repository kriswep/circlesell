[![CircleCI](https://circleci.com/gh/kriswep/circlesell.svg?style=svg)](https://circleci.com/gh/kriswep/circlesell)

# circlesell

Convenient ecommerce thingy in the works

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
Included graphiql adds auth token from localStorage key access_token. That means, you can get a valid token and add it in graphiql into localStorage, like so:

```javascript
localStorage.setItem('access_token', 'Bearer YOUR_TOKEN');
```

Or use playground endpoint and set header there.
