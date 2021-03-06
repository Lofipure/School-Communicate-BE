const DB = require('sequelize');
const connection = require('./dbConnection');

const userModel = connection.define('user', {
  uId: {
    primaryKey: true,
    type: DB.DataTypes.BIGINT,
    autoIncrement: true,
    field: 'u_id',
  },
  name: {
    type: DB.DataTypes.STRING,
    field: 'name',
  },
  telephone: {
    type: DB.DataTypes.STRING,
    field: 'telephone',
  },
  email: {
    type: DB.DataTypes.STRING,
    field: 'email',
    unique: true,
  },
  college: {
    type: DB.DataTypes.STRING,
    field: 'college',
  },
  major: {
    type: DB.DataTypes.STRING,
    field: 'major',
  },
  grade: {
    type: DB.DataTypes.STRING,
    field: 'grade',
  },
  location: {
    type: DB.DataTypes.STRING,
    field: 'location',
  },
  password: {
    type: DB.DataTypes.STRING,
    field: 'password',
  },
  studentID: {
    type: DB.DataTypes.STRING,
    field: 'student_id',
  },
  avatar: {
    type: DB.DataTypes.TEXT,
    field: 'avatar',
  },
});

const articleModel = connection.define('article', {
  aId: {
    type: DB.DataTypes.INTEGER,
    field: 'a_id',
    primaryKey: true,
    autoIncrement: true,
  },
  author: {
    type: DB.DataTypes.INTEGER,
    field: 'author',
  },
  shortDesc: {
    type: DB.DataTypes.TEXT,
    field: 'short_desc',
  },
  mainText: {
    type: DB.DataTypes.TEXT,
    field: 'main_text',
  },
  articleTitle: {
    type: DB.DataTypes.STRING,
    field: 'article_title',
  },
  getGoodNumber: {
    type: DB.DataTypes.INTEGER,
    field: 'get_good_number',
    defaultValue: 0,
  },
  getBadNumber: {
    type: DB.DataTypes.INTEGER,
    field: 'get_bad_number',
    defaultValue: 0,
  },
});

const commentModel = connection.define('comment', {
  cId: {
    type: DB.DataTypes.INTEGER,
    field: 'c_id',
    primaryKey: true,
    autoIncrement: true,
  },
  commenterId: {
    type: DB.DataTypes.STRING,
    field: 'commenter_id',
  },
  commentText: {
    type: DB.DataTypes.TEXT,
    field: 'comment_text',
  },
  articleId: {
    type: DB.DataTypes.STRING,
    field: 'acticle_id',
  },
  getGoodNumber: {
    type: DB.DataTypes.INTEGER,
    defaultValue: 0,
    field: 'get_good_number',
  },
});

const tagModel = connection.define('tag', {
  tId: {
    type: DB.DataTypes.INTEGER,
    field: 't_id',
    primaryKey: true,
    autoIncrement: true,
  },
  tName: {
    type: DB.DataTypes.STRING,
    field: 't_name',
  },
  tagDesc: {
    type: DB.DataTypes.TEXT,
    field: 'tag_desc',
  },
});

const articleToTagModel = connection.define('article_to_tag', {
  tId: {
    type: DB.DataTypes.INTEGER,
    field: 't_id',
  },
  aId: {
    type: DB.DataTypes.INTEGER,
    field: 'a_id',
  },
});

module.exports = {
  userModel,
  articleModel,
  commentModel,
  tagModel,
  articleToTagModel,
};
