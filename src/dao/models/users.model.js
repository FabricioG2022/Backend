const mongoose = require ('mongoose');

const userCollection = "users";

const userSchema = new mongoose.Schema ({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    age: Number
})

const userModel = mongoose.model(userCollection, userSchema);

module.exports = userModel;