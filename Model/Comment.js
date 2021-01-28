const { commentModel, userModel } = require('../modelDefine');

async function pushComment(obj) {
  const { commenterEmail, articleId, commentStatus, commentText } = obj;
  let commenterId = await userModel.findOne({
    where: {
      email: commenterEmail,
    },
  });
  commenterId = commenterId.dataValues.uId;
  return await commentModel.create({
    articleId,
    commentStatus,
    commentText,
    commenterId,
  });
}

async function commentGetGood(cId) {
  let nowNumber = await commentModel.findOne({
    where: {
      cId: cId,
    },
  });
  console.log(nowNumber);
  nowNumber = nowNumber.getGoodNumber;
  console.log(nowNumber);
  return commentModel.update(
    {
      getGoodNumber: nowNumber + 1,
    },
    {
      where: {
        cId: cId,
      },
    },
  );
}

async function getCommentsByArticleId(articleId) {
  let commentInfo = await commentModel.findAll({
    where: {
      articleId: articleId,
    },
    order: [['c_id', 'DESC']]
  });
  for (let i = 0; i < commentInfo.length; ++i) {
    let commenterInfo = await userModel.findOne({
      where: {
        uId: commentInfo[i].commenterId,
      },
    });
    commentInfo[i].dataValues.commenterInfo = commenterInfo;
  }
  return commentInfo;
}

module.exports = {
  getCommentsByArticleId,
  commentGetGood,
  pushComment,
};
