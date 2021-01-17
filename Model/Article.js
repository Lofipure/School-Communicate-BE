const {
  articleModel,
  userModel,
  articleToTagModel,
  tagModel,
} = require('../modelDefine');

const { getUserInfoByEmail } = require('./User');

async function getAllArticlesByAuthorId(userEmail) {
  console.log(userEmail);
  const authorInfo = await userModel.findAll({
    where: {
      email: userEmail,
    },
  });
  const articleList = await articleModel.findAll({
    where: {
      author: authorInfo[0].uId,
    },
  });
  for (let i = 0; i < articleList.length; ++i) {
    let tags = await articleToTagModel.findAll({
      where: {
        aId: articleList[i].aId,
      },
    });
    tags = tags.map((item) => item.tId);
    let tagsNameForRet = [];
    for (let j = 0; j < tags.length; ++j) {
      let tagsNames = await tagModel.findAll({
        where: {
          tId: tags[j],
        },
      });
      tagsNameForRet.push(tagsNames[0].tName);
    }
    articleList[i].dataValues.articleTags = tagsNameForRet;
  }
  return articleList;
}

async function createArticle(obj) {
  try {
    let articleCreator = await getUserInfoByEmail(obj.author);
    let articleCreatorId = articleCreator[0].uId;
    obj.author = articleCreatorId;
    const articleObj = await articleModel.create(obj);
    let aId = articleObj.aId;
    for (let i = 0; i < obj.tags.length; ++i) {
      articleToTagModel.create({
        aId: aId,
        tId: obj.tags[i],
      });
    }
    return true;
  } catch (e) {
    return false;
  }
}

async function getAllArticle() {
  let article = await articleModel.findAll();
  for (let index = 0; index < article.length; index++) {
    article[index].dataValues.authorInfo = await userModel.findOne({
      where: {
        u_id: article[index].author,
      },
    });
    console.log(article[index].dataValues);
    article[index].dataValues.tags = [];
    let articleTagsId = await articleToTagModel.findAll({
      where: {
        aId: article[index].aId,
      },
    });
    for (let j = 0; j < articleTagsId.length; ++j) {
      let tagName = await tagModel.findOne({
        where: {
          tId: articleTagsId[j].tId,
        },
        attributes: ['tName'],
      });
      article[index].dataValues.tags.push(tagName.tName);
    }
  }
  console.log(article);
  return article;
}
module.exports = {
  createArticle,
  getAllArticlesByAuthorId,
  getAllArticle,
};
