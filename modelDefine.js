const DB = require("sequelize");
const connection = require("./dbConnection");

const userModel = connection.define("user", {
  uId: {
    primaryKey: true,
    type: DB.DataTypes.BIGINT,
    autoIncrement: true,
    field: "u_id",
  },
  name: {
    type: DB.DataTypes.STRING,
    field: 'name',
  },
  telephone: {
    type: DB.DataTypes.STRING,
    field: "telephone",
  },
  email: {
    type: DB.DataTypes.STRING,
    field: 'email',
    unique: true,
  },
  college: {
    type: DB.DataTypes.STRING,
    field: "college",
  },
  major: {
    type: DB.DataTypes.STRING,
    field: "major",
  },
  grade: {
    type: DB.DataTypes.STRING,
    field: "grade"
  },
  location: {
    type: DB.DataTypes.STRING,
    filed: "location"
  },
  password: {
    type: DB.DataTypes.STRING,
    field: "password"
  },
  studentID: {
    type: DB.DataTypes.STRING,
    filed: 'student_id'
  }
});

const articleModel = connection.define("article", {
  aId: {
    type: DB.DataTypes.INTEGER,
    field: "a_id",
    primaryKey: true,
    autoIncrement: true,
  },
  author: {
    type: DB.DataTypes.INTEGER,
    field: "author",
  },
  shortDesc: {
    type: DB.DataTypes.TEXT,
    field: "short_desc",
  },
  mainText: {
    type: DB.DataTypes.TEXT,
    field: "main_text",
  }
});

const commentModel = connection.define("comment", {
  cId: {
    type: DB.DataTypes.INTEGER,
    field: "c_id",
    primaryKey: true,
    autoIncrement: true,
  },
  commenterId: {
    type: DB.DataTypes.INTEGER,
    field: "commenter_id",
  },
  commentText: {
    type: DB.DataTypes.TEXT,
    field: "comment_text",
  },
  articleId: {
    type: DB.DataTypes.INTEGER,
    field: "acticle_id",
  }
});


const tagModel = connection.define("tag", {
  tId: {
    type: DB.DataTypes.INTEGER,
    filed: "t_id",
    primaryKey: true,
    autoIncrement: true,
  },
  tName: {
    type: DB.DataTypes.STRING,
    filed: "t_name",
  }
});

const articleToTagModel = connection.define("article_to_model", {
  tId: {
    type: DB.DataTypes.INTEGER,
    field: "t_id",
  },
  aId: {
    type: DB.DataTypes.INTEGER,
    field: "a_id",
  }
});

module.exports = {
  userModel,
  articleModel,
  commentModel,
  tagModel,
  articleToTagModel,
};
