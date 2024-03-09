const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    state : {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    sport: {
        type: String
    }
});

const User = mongoose.model('user',userSchema);

module.exports = User;