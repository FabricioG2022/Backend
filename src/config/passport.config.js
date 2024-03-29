const passport = require('passport');
const local = require('passport-local');
const userService = require('../dao/models/users.model');
const { createHash, isValidPassword } = require('./utils');
const GitHubStrategy = require ('passport-github2')

const LocalStrategy = local.Strategy;
const initializePassport = () => {
    passport.use('register', new LocalStrategy(
        { passReqToCallback: true, usernameField: 'email' }, async (req, username, password, done) => {
            const { first_name, last_name, email, age } = req.body;
            try {
                let user = await userService.findOne({ email: username });
                if (user) {
                    console.log("Usuario ya existe");
                    return done(null, false);
                }
                const newUser = {
                    first_name,
                    last_name,
                    email,
                    age,
                    password: createHash(password)
                }
                let result = await userService.create(newUser);
                return done(null, result);
            } catch (error) {
                return done("Error al obtener el usuario: " + error);
            }
        }))
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    passport.deserializeUser(async (id, done) => {
        let user = await userService.findById(id);
        done(null, user);
    });
    passport.use('login', new LocalStrategy({usernameField:'email'}, async(username,password,done)=>{
        try{
            const user = await userService.findOne({email:username})
            if(!user) {
                console.log("User doesn't exist")
                return done (null,false);
            }
            if(!isValidPassword(user,password)) return done (null,false);
            return done(null,user);
        }catch(error){
            return done(error);
        }
    }))
    passport.use('github',new GitHubStrategy({
        clientID:"Iv1.3340b15c328d62cc",
        clientSecret:'8e94a36a1012aef74501e1b0541e1f366f3ebc13',
        callbackURL:'http://localhost:8080/api/sessions/githubcallback'
    },async (accessToken,refreshToken,profile,done)=>{
        try{
            console.log(profile);
            let user = await userService.findOne({email:profile._json.email})
            if(!user){
                let newUser = {
                    first_name:profile._json.name,
                    last_name:'',
                    age:20,
                    email:profile._json.email,
                    password:''
                }
                let result = await userService.create(newUser);
                done(null,result);
            }
            else{
                done(null,user);
            }
        }catch(error){
            return done(error);
        }
    }
    ))
}

module.exports = initializePassport;
