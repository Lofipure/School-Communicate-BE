const router = require('koa-router')();
const userMethod = require('./Model/User');
const articleMethod = require('./Model/Article');
const tagMethod = require('./Model/Tag');
const { tagModel } = require('./modelDefine');

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

router.get('/getArticleById', async (ctx) => {
  ctx.body = await articleMethod.getArticleById(ctx.request.query.aId);
});

router.get('/getArticleByTagId', async (ctx) => {
  ctx.body = await articleMethod.getArticlesByTagId(ctx.request.query.tId);
});

router.get('/removeArticle', async (ctx) => {
  ctx.body = await articleMethod.removeArticle(ctx.request.query.aId);
});

router.get('/getCommentsByArticleId', async (ctx) => {
  ctx.body = '123';
});

router.get('/removeTag', async (ctx) => {
  // console.log(ctx.request.query.tId);
  ctx.body = await tagMethod.removeTag(ctx.request.query.tId);
});
module.exports = router;
