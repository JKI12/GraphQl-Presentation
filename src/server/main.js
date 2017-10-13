import koa from 'koa';
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import cors from 'koa2-cors';
import serve from 'koa-static';
import path from 'path';
import indexHtml from './index';

import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';

import qlSchema from './schema';

const app = new koa();
const router = new koaRouter();
const PORT = 3000;

// Needed for the post
app.use(koaBody());

router.post('/graphql', koaBody(), graphqlKoa({  schema: qlSchema }));
router.get('/graphql', graphqlKoa({ schema: qlSchema }));

router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

router.get('/', (ctx, next) => {
  ctx.body = indexHtml;
}).get('/:id', (ctx, next) => {
  ctx.body = indexHtml;
});

app.use(serve('../assets'));

app.use(cors());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
