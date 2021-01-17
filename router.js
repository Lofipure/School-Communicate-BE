const router = require('koa-router')();
const userMethod = require('./Model/User');
const articleMethod = require('./Model/Article');
const tagMethod = require('./Model/Tag');

router.post('/register', async (ctx) => {
  console.log(ctx.request.body);
  const res = await userMethod.createUser(ctx.request.body);
  ctx.body = res;
});

router.post('/login', async (ctx) => {
  const res = await userMethod.checkLoginStatus(ctx.request.body);
  ctx.body = res;
});

router.get('/getUserInfoByEmail', async (ctx) => {
  const res = await userMethod.getUserInfoByEmail(ctx.request.query.email);
  ctx.body = res;
});

router.post('/updateUserInfo', async (ctx) => {
  const res = await userMethod.updateStudentInfo(ctx.request.body);
  ctx.body = res ? true : false;
});

router.post('/createTag', async (ctx) => {
  const res = await tagMethod.createTag(ctx.request.body);
  ctx.body = res ? true : false;
});

router.get('/getAllTag', async (ctx) => {
  ctx.body = await tagMethod.getAllTag();
});

router.get('/getAllTagDetailInfo', async (ctx) => {
  ctx.body = await tagMethod.getAllTagDetailInfo();
});

router.post('/createArticle', async (ctx) => {
  ctx.body = await articleMethod.createArticle(ctx.request.body);
});

router.get('/getUserArticle', async (ctx) => {
  let ret = await articleMethod.getAllArticlesByAuthorId(
    ctx.request.query.email,
  );
  console.log(ret);
  ctx.body = ret;
});

router.get('/getAllArticle', async (ctx) => {
  ctx.body = await articleMethod.getAllArticle();
});

module.exports = router;
