import Koa from 'koa';
import router from "./router";
import { PORT } from "./constant";

const app: Koa = new Koa();

app.use(router.routes());

app.listen(PORT, () => {
    console.log("Server running on " + PORT);
});