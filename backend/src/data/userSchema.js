import mongoose from 'mongoose';
import validator from 'validator';

import User from '../models/User.js'

const schema = new mongoose.Schema({
        username:{
            type:String,
            required:true,
            minLength:User.usernameMin,
            maxLength:User.usernameMax
        },

        email:{
            type:String,
            required: 'Email address is required',
            trim: true,
            lowercase: true,
            validate: [validator.isEmail, 'invalid email']
        },

        password: {
            type: String,
            required: 'Password is required',
            minLength: User.passwordMin,
            maxLength: User.passwordMax
        }
    }, 
    {
        timestamps: true,
        autoCreate: false,
    }).loadClass(User);

export const userSchema = mongoose.model("User", schema);