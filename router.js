const router = require('koa-router')();
const userMethod = require("./Model/User");

/*
 @Function: 注册
 @Params: 
  email/studentID/name/telephone/grade.collegeAndMajor/location/password
 @Response: 
  true: 注册成功
  false: 注册失败
*/
router.post("/register", async (ctx) => {
  console.log(ctx.request.body);
  const res = await userMethod.createUser(ctx.request.body);
  ctx.body = res;
});

/*
 @Function: 登录
 @Params:
  email/password
 @Response:
  1: 用户名&密码正确
  2: 用户不存在
  3: 密码错误
*/
router.post("/login", async (ctx) => {
  const res = await userMethod.checkLoginStatus(ctx.request.body);
  ctx.body = res;
});

/*
  @Function: 通过邮箱获取用户信息
  @Params: email
  @Response:
    email/studentID/name/telephone/grade.collegeAndMajor/location/password
*/
router.get("/getUserInfoByEmail", async (ctx) => {
  const res = await userMethod.getUserInfoByEmail(ctx.request.query.email);
  ctx.body = res;
});

module.exports = router;
