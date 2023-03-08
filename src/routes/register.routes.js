const Router = require("express");
const router = Router();
const usersModel = require('../dao/models/users.model');
const createHash = require('../../utils')


router.get('/', (req, res) => {
    res.render('signUp')
})

router.post('/', async (req, res) => {
    const { first_name, last_name, email, password, age } = req.body;
    if (!first_name || !last_name || !email || !age || !password) return res.status(400).send({ message: "error", data: "Faltan datos" })
    try {
        const user = await usersModel.create({
            first_name,
            last_name,
            email,
            password: createHash(password),
            age
        });
        res.status(200).send({ message: "success", data: user });
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
})

module.exports = router;