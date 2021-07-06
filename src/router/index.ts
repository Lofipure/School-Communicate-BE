import Router from "koa-router";

const router: Router = new Router();

router.get("/get", async (ctx) => {
  ctx.body = "get";
});

export default router;