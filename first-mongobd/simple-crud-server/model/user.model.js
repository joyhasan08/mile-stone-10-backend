const User = require('../model/user.schema')
async function createUser(user) {
    const { email } = user;
    const isUser = await User.find({ email });
    console.log(isUser);
    if (isUser.length == 0) {
        const newUser = new User({ ...user })
        try {
            await newUser.save();
        } catch (err) {
            console.log(err);
        }
        return true;
    } else {
        return false;
    }
}
async function getAllUser() {
    const data = await User.find({});
    return data;
}
module.exports = { createUser, getAllUser }