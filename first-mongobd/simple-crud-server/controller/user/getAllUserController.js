const connectDB = require("../../model/mongoose");
const express = require("express");
const { getAllUser } = require("../../model/user.model");
async function getAllUserController() {
    await connectDB();
    const data = await getAllUser();
    res.json({ done: "hi from user", data })
}

module.exports = { getAllUserController }