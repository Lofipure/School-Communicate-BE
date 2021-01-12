const {
  userModel,
  articleModel,
  commentModel,
  tagModel,
  articleToTagModel
} = require("./modelDefine");

userModel.sync({force: true});
articleModel.sync({force: true});
commentModel.sync({force: true});
tagModel.sync({force: true});
articleToTagModel.sync({force: true});
