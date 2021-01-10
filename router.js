const router = require('koa-router')();
const userMethod = require("./Model/User");

router.post("/register", async (ctx) => {
  const res = await userMethod.createUser(ctx.request.body);
  ctx.body = res;
});

router.post("/login", async (ctx) => {
  const res = await userMethod.checkLoginStatus(ctx.request.body);
  ctx.body = res;
});

router.get("/getUserInfoByEmail", async (ctx) => {
  const res = await userMethod.getUserInfoByEmail(ctx.request.query.email);
  ctx.body = res;
});

module.exports = router;
