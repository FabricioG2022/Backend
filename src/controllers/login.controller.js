const loginCtrl = {}

const usersModel = require('../dao/models/users.model');
const isValidPassword = require('../config/utils')

loginCtrl.render = (req, res) => {
     res.render('login')
 };

 loginCtrl.postLogin = async (req, res) => {
     const { username, password } = req.body;
     try {
         const result = await usersModel.findOne({ email: username })
         if (result) {
             if (isValidPassword(password, response.password)) {
                 req.session.user = result;
                 res.status(200).json({ message: "success", data: result });
             }else{
                 res.status(401).json({message: "error", data: "Password invalido"});
             }

         } else {
             res.status(404).json({ message: "error", data: "User not found" });
         }
     } catch (error) {
         res.status(500).json({ error: error.message })
     }
 };


 module.exports = loginCtrl;

