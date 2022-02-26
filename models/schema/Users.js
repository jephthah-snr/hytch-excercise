const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

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
    password: {
        type: String,
        required: true,
        minlength: [8, 'passwords must be more than 8 characters'],
        select: false
    },
    resetpasswordtoken: String,
    resetpasswordexpire: Date,

    // password2: {
    //     type: String,
    //     required: false,
    // }

},{timestamps: true});


UserSchema.pre('save', async (next) => {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
});

module.exports = mongoose.model('User', UserSchema );
