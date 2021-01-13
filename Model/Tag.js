const {
  tagModel,
  articleModel,
  articleToTagModel,
} = require("../modelDefine");


async function checkTag(tagName) {
  const checkResult = await tagModel.findAll({
    where: {
      tName: tagName
    }
  });
  return checkResult.length;
}

async function createTag(obj) {
  const status = await checkTag(obj.tName);
  if (status == 0) {
    return await tagModel.create(obj);
  } else {
    return false;
  }
}

async function getAllTag() {
  let result = await tagModel.findAll();
  let returnData = result.map((item) => ({
    label: item.tName,
    value: item.tId
  }));
  return returnData;
}

async function getAllTagDetailInfo() {
  let result = await tagModel.findAll();
  let retData = [];
  for (let i = 0; i < result.length; ++i) {
    let articleNumberTemp = await articleToTagModel.findAll({
      where: {
        tId: result[i].tId
      }
    });
    retData.push({
      tId: result[i].tId,
      tName: result[i].tName,
      tagDesc: result[i].tagDesc,
      articleNumber: articleNumberTemp.length
    });
  }

  return retData;
}
module.exports = {
  createTag,
  checkTag,
  getAllTag,
  getAllTagDetailInfo,
};
