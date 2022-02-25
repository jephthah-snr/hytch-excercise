const User = require('../models/schema/Users')

exports.Signin = async (req, res, next) => {
    const {password, email} = req.body
};

exports.Register = async (req, res, next) => {
    try {
        const {password1, password2} = req.body
        if (password1 !== password2){
            res.status(401).json({
                success: false,
                msg: "password fields don't match"
            });
        }
        const newUser = await User.create(req.body)
        const {password1:pw1, ...rest} = newUser
        res.status(201).json({
            success: true,
            data: rest._doc
        });
    } catch (error) {
        next(error);
    }
};