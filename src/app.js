const koa = require('koa');
const koaLogger = require('koa-logger');
const { koaBody } = require('koa-body');
const cors = require('@koa/cors');
const corsOptions ={ origin:'http://localhost:5173', credentials:true, optionSuccessStatus:200 }
const router = require('./routes.js');
const orm = require('./models');


const app = new koa();

app.context.orm = orm;


app.use(cors(corsOptions));

app.use(koaLogger());
app.use(koaBody());

app.use(router.routes());

app.use((ctx, next) => {
    ctx.body = 'Hello World';
});

// app.listen(3000, () => {
//   console.log('Server is listening on port 3000');
// });
module.exports = app;