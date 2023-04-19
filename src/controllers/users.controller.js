
const User = require('../dao/models/users.model');
const usersCtrl = {};

usersCtrl.renderSignUp = (req, res) => {
    res.render('signup')
};

usersCtrl.signUp = async (req, res) => {
    const errors = [];
    const { first_name, email, last_name, age, password } = req.body;
    if (!first_name && !last_name && !email && !password && !age) {
        errors.push({text:"Complete los campos por favor"});
    }
    if (password.lenght <4) {
        errors.push({text:"Password debe tener mas de 4 caracteres"})
    }
    if (errors.lenght > 0) {
        res.render('signup', {
            errors,
            first_name,
            email,
            last_name,
            age,
            password
        })
    } else {
        const emailUser = await User.findOne({email: email});
        if (emailUser) {
            errors,
            res.redirect('signup');
        }else {
            const newUser = new User({first_name, email, last_name, age, password});
            await newUser.save(); 
            res.redirect('signin');
        }
    };
}

usersCtrl.renderSignIn = (req, res) => {
    res.render('signin')
};

usersCtrl.signIn = (req, res) => {
    res.send('signin')
};

usersCtrl.logout = (req, res) => {
    res.send('logout')
};

module.exports = usersCtrl;