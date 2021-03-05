const mongoose = require('mongoose');

const customHabit = require('./customHabit');
const simpleHabit = require('./simpleHabit');

const isRequired = true;

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        required:isRequired
    },
    email: {
        type:String,
        required:isRequired
    },
    password: {
        type:String,
        required:isRequired
    },
    sHabits: {
        type:{type:String,ref:simpleHabit}
    },
    cHabits: {
        type:{type:String,ref:customHabit}
    }

});

const User = new mongoose.model('User',UserSchema);

module.exports = {User:User};


