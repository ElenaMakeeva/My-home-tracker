const express = require('express');
const router = express.Router();
// const {
//   User, City, Street, Home, Userinfo, Benifit, Bid, Chat, Global_news, Instruction, Like, Local_news, Photolink, Response, Store, Support,
// } = require('../db/models');
// const bcrypt = require('bcrypt');
// const { Op } = require("sequelize");
const {createUserAndSession} = require('../controllers/user')




router.post('/signup', createUserAndSession)


module.exports = router;
