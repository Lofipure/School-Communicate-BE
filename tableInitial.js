const {
  userModel,
  articleModel,
  commentModel
} = require("./modelDefine");

userModel.sync({force: true});
articleModel.sync({force: true});
commentModel.sync({force: true});
