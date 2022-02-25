const mongoose = require('mongoose')


const connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://trove:trove@cluster0.xrqcw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        console.log('database connected successfully!')
    } catch (err) {
        console.error(err)
    }
}

module.exports = connectDb