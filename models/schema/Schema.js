const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'All jobs must have a title'],
        unique: false,
        trim: true,
        maxlength: [70, 'job title cannot be more than 70 characters']
    },
    slug:  String,
    description: {
        type: String,
        required: [true, 'All jobs must have a description'],
        unique: false,
        trim: true,
        maxlength: [700, 'job title cannot be more than 700 characters']
    },
    email: {
        type: String,
        required: [true, 'please provide a valid email address'],
        unique: false,
        trim: false,
    },
    jobType: {
        type: String,
        required: [true, 'All jobs must have a type'],
        enum: ['part-time', 'full-time', 'remote']
    },
    company: {
        type: String,
        required: [true, 'Please what is the name of you company if none, please use your name.'],
        unique: false,
        trim: false,
        maxlength: [20, 'fields data cannot be more than 20 characters']
    },
    state: String,
    city: String,
    country: String,
    zipcode: String,
    active: {
        type: Boolean,
        default: [true],
    }
    // location: {
    //     //GeoJson Point
    // }
},{timestamps: true});


var JobModel = mongoose.model('Jobmodel', JobSchema );

module.exports = JobModel