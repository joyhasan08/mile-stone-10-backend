const connectDB = require('../../model/mongoose');
const { createUser } = require('../../model/user.model')


async function createUserController(req, res) {
    await connectDB();
    const response = await createUser(req.body);
    if (response) {
        res.json({ msg: "done" })
    } else {
        res.json({ msg: "already created" })
    }

}
module.exports = { createUserController }