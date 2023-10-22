const express = require("express");
const { createUserController } = require("../controller/registration/createUser");
const registrationRoute = express.Router();
registrationRoute.post('/registration', createUserController)
module.exports = registrationRoute;