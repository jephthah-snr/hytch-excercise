const User = require('../models/schema/Users')

//method: GET
//description: Handels user login.
//route: api/v1/auth/login
exports.Signin = async (req, res, next) => {
    const {password, email} = req.body

    if(!email || !password){
        res.status(400).json({
            msg: 'please provide an email and password'
        })
        // return next(new ErrorResponse('please provide an email and password', 400));
    }
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    if(String(email).search (filter) != -1 === false){
        
        // return next(new ErrorResponse('please provide a valid email address', 400));
        res.status(400).json({
            msg: 'please provide a valid email address'
        })
    }
    const user = await User.findOne({email}).select('+password');

    if(!user) {
        // return next(new ErrorResponse('please provide an email and password', 400));
        res.status(400).json({
            msg: 'please provide an email and password'
        })
    }
    res.status(200).send(user)
};


//method: POST
//description: Handles the route for registration of new users into the databse
//route: api/v1/auth/register
exports.Register = async (req, res, next) => {
    try {
        const {password, password2} = req.body
        //verifying password is same
        if (password !== password2){
            res.status(401).json({
                success: false,
                msg: "password fields don't match"
            });
        }
        const newUser = await User.save(req.body)
        const {password:pw, ...rest} = newUser
        res.status(201).json({
            success: true,
            data: rest._doc
        });
    } catch (error) {
        next(error);
    }
};