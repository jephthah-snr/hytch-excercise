const { default: mongoose } = require('mongoose');
const Jobmodel = require('../models/schema/Schema')

//get all Jobs Route
//  GET  /api/v1/jobs
exports.getAllJobs = async (req, res, next) => {
    try {
        const data = await Jobmodel.find()
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json({
            status: 'Failed',
            error: err
        })
    }
}


//get single Job from Db
//  GET  /api/v1/jobs/:id
exports.getSingleJob = (req, res, next) => {
    res.send("get single job");
}
//Add new Jobs Route
//  GET  /api/v1/job/new
exports.postNewJob = async (req, res, next) => {
   try {
    const bootcamp = await Jobmodel.create(req.body)
    // let data = req.body
    res.status(201).json({
        status: true,
        data: bootcamp
    });
   } catch (err) {
      res.status(400).json({
          data: err.data,
          success: false
      })
   }
}

//delete jon Jobs Route
//  GET  /api/v1/jobs/:id
exports.deleteJob = (req, res, next) => {
    res.send("delete");
}

exports.updateJob = (req, res, next) => {
    res.send("update!!!!");
}