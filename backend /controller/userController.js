const connection = require("../db/conf");
const userModels = require("../models/userModels");
const data = require("../db/data");




const sendUserInfo = (req, res, next) => {
    const userData = data.filter((user) => user.id == req.userInfo.id);
    res.json(userData);
  };
  
  module.exports = { sendUserInfo };