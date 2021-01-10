const Koa = require("koa");
const app = new Koa();
const router = require("./router");
const cors = require("koa-cors");
const bodyParser = require("koa-bodyparser");

app.use(bodyParser());
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(18080);
