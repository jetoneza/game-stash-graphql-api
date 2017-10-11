import express from 'express';
import bodyParser from 'body-parser';

import { graphql, graphiql } from './graphql'

const app = express();

app.use('/graphql', bodyParser.json(), graphql);
app.use('/graphiql', graphiql);

app.use('/', (req, res) => {
  res.json({
    message: 'Hello!',
  });
});

export default app
