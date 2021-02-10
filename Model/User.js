const { userModel } = require('../modelDefine');
const { proviceCode } = require('../Data/provice');
async function createUser(obj) {
  obj.college = obj.collegeAndMajor[0];
  obj.major = obj.collegeAndMajor[1];
  try {
    await userModel.create(obj);
    return true;
  } catch (err) {
    // return false;
    console.log(err);
    return false;
  }
}

async function checkLoginStatus(obj) {
  const { email, password } = obj;
  const checkPassword = await userModel.findAll({
    where: {
      email: email,
    },
  });
  if (checkPassword.length === 0) {
    return 2;
  } else {
    if (checkPassword[0].password == password) {
      return 1;
    } else {
      return 0;
    }
  }
}

async function getUserInfoByEmail(userEmail) {
  return await userModel.findAll({
    where: {
      email: userEmail,
    },
  });
}

async function updateStudentInfo(obj) {
  obj.college = obj.collegeAndMajor[0];
  obj.major = obj.collegeAndMajor[1];
  return await userModel.update(obj, {
    where: {
      email: obj.email,
    },
  });
}

async function getUserInfoByProviceCode(pCode) {
  let usersInfo = await userModel.findAll();
  let finalUserInfo = usersInfo.filter((item, index) => {
    return String(JSON.parse(item.location)[0]) == pCode;
  });
  return finalUserInfo;
}

module.exports = {
  getUserInfoByProviceCode,
  createUser,
  checkLoginStatus,
  getUserInfoByEmail,
  updateStudentInfo,
};
