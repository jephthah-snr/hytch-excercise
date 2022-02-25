const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        maxlength: [30, 'username cannot be more than 20 characters']
    },
    last_name: {
        type: String,
        required: true,
        maxlength: [30, 'username cannot be more than 20 characters'] 
    },
    email: {
        type: String,
        required: true,
        maxlength: [30, 'Email address cannot be more than 20 characters'],
        match: [ /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/, 'please provide a valid email address'],
        unique: true

    },
    password1: {
        type: String,
        required: true,
    },
    // password2: {
    //     type: String,
    //     required: false,
    // }

},{timestamps: true});


module.exports = mongoose.model('User', UserSchema );
