import express from 'express';
import serveStatic from 'serve-static';
import path from 'path';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';

const PORT = process.env.PORT || 3010;
const IP = process.env.IP || '0.0.0.0';
const server = express();

const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
// const jwtAuthz = require('express-jwt-authz');

// Authentication middleware. When used, the
// access token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the singing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://kriswep.eu.auth0.com/.well-known/jwks.json',
  }),

  // Validate the audience and the issuer.
  audience: 'https://graphql.wetainment.com/api',
  issuer: 'https://kriswep.eu.auth0.com/',
  algorithms: ['RS256'],
  credentialsRequired: false,
});

// ignore scopes, we do that ourselves
// const checkScopes = jwtAuthz(['api:access']);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export const graphqlSchemaFac = request => ({
  schema,
  // rootValue,
  context: {
    user: request.user,
    headers: request.headers,
    // env: process.env,
  },
});

server.use('/', serveStatic(path.join(__dirname, '../client/build')));

server.use(
  '/graphql',
  bodyParser.json(),
  checkJwt,
  // checkScopes,
  graphqlExpress(graphqlSchemaFac),
);

server.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
    query: `# Welcome to GraphiQL
{
  manufacturers(limit: 100, offset: 0) {
    id
    name
    products {
      id
      name
      description
    }
  }
  products(limit: 100, offset: 0) {
    id
    name
    description
    manufacturer {
      id
      name
    }
  }
  quantitys(limit: 100, offset: 0) {
    id
    amount
    product {
      name
    }
  }
}`,
  }),
);

server.listen(PORT, IP, () => {
  console.log(`GraphQL Server running on http://localhost:${PORT}/graphql`); // eslint-disable-line
  console.log(`View GraphiQL at http://localhost:${PORT}/graphiql`); // eslint-disable-line
});

export default server;
