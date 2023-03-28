const sessionCtrl = {}

const passport = require("passport");

sessionCtrl.postRegister = passport.authenticate('register',{failureRedirect:'/failregister'}), async (req,res) =>{
    res.send({status:"success", message: "User registered"})
};

sessionCtrl.getFailRegister = async (req,res) => {
    console.log("Failed Strategy");
    res.send({error:"Failed"})
};

sessionCtrl.postLogin = passport.authenticate('login',{failureRedirect:'/faillogin'}),async (req,res) => {
    if(!req.user) return res.status(400).send({status:"error",error:"Invalid credentials"})
    req.session.user = {
        first_name : req.user.first_name,
        last_name : req.user.last_name,
        age:req.user.age,
        email:req.user.email
    }
    res.send({status:"success",payload:req.user})
};

sessionCtrl.getFailLog = (req,res)=>{
    res.send({error:"Failed Login"})
};

sessionCtrl.github = passport.authenticate('github',{scope:['user:email']}),async(req,res)=>{};

sessionCtrl.githubCall = passport.authenticate('github',{failureRedirect:'/login'}),async(req,res)=>{
    req.session.user = req.user;
    res.redirect('/');
};

module.exports = sessionCtrl;