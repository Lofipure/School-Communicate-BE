const {
  articleModel,
  userModel
} = require("../modelDefine");

async function getAllArticlesByAuthorId(aEmail) {
  const aId = await userModel.findAll({
    attributes: ['id'],
    where: {
      emamil: aEmail
    }
  });
  console.log(aId);
  const articleList = await articleModel.findAll({
    where: {
      author: aId
    }
  });
  return articleList;
}

module.exports = {
  getAllArticlesByAuthorId
};
