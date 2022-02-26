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
exports.getSingleJob = async (req, res, next) => {
    try {
     const job = await Jobmodel.findById(req.params.id)
     if (!job){
         return res.status(400).json({status: "Failed!", success: false})
     }
     res.status(200).json({
         status: true,
         data: job
     });
    } catch (err) {
        next(err)
    //    res.status(404).json({
    //        data: err.data,
    //        msg: "the requestd rosource was not found!"
    //    })
    }
}
//Add new Jobs Route
//  GET  /api/v1/job/new
exports.postNewJob = async (req, res, next) => {
   try {
       //tried to validate email address
    // var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    // if(String(req.body.email).search (filter) != -1 === false){
    //     res.status(500).send('email format not correct it requires "@"')
    // }
    const job = await Jobmodel.create(req.body)
    res.status(201).json({
        status: true,
        data: job
    });
   } catch (err) {
      res.status(400).json({
          data: err.data,
          success: false
      })
   }
}

//delete Jobs Route
//  GET  /api/v1/jobs/:id
exports.deleteJob = async (req, res, next) => {
    try {
        const job = await Jobmodel.findByIdAndDelete(req.params.id)

        
     if (!job){
        return res.status(400).json({status: "Failed!",
                                       success: false})
    }

        res.status(200 ).json({
            status: true,
            data: `deleted ${job.title} sucessfully.`
        });
       } catch (err) {
          res.status(404).json({
              data: err.data,
              msg: "the requestd rosource was not found!"
          })
       }
   }

exports.updateJob = async(req, res, next) => {
    try {
        const job = await Jobmodel.findByIdAndUpdate(req.params.id)

        
     if (!job){
        return res.status(400).json({status: "Failed!",
                                       success: false})
    }

        res.status(200 ).json({
            status: updated,
            data: job
        });
       } catch (err) {
          res.status(404).json({
              data: err.data,
              msg: "the requestd rosource was not found!"
          })
       }
}