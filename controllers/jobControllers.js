const { default: mongoose } = require('mongoose');
const Jobmodel = require('../models/schema/Schema')

//method: GET
//description: get all job posts from database with id
//route: api/v1/jobs/23435543543645765
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


//method: GET
//description: get single job from database with id
//route: api/v1/jobs/24565464345
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
        //nect() handles the error with custom error handlers
        next(err)
    //    res.status(404).json({
    //        data: err.data,
    //        msg: "the requestd rosource was not found!"
    //    })
    }
}
//method: POST
//description: add new job to databse
//route: api/v1/job/new
exports.postNewJob = async (req, res, next) => {
   try {
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

//method: DELETE
//description: delete single job from database with _id
//route: api/v1/jobs/23435543543645765
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
              data: err,
              msg: "the requestd rosource was not found!"
          })
       }
   }


   //method: PUT
//description: edit single job from database with _id
//route: api/v1/jobs/23435543543645765
exports.updateJob = async(req, res, next) => {
    try {
        const job = await Jobmodel.findByIdAndUpdate(req.params.id)

     if (!job){
        return res.status(400).json({status: "Failed!", success: false})
    }

        res.status(200 ).json({
            status: updated,
            data: job
        });
       } catch (err) {
          res.status(404).json({
              data: err.data,
              msg: "the requested rosource was not found!"
          })
       }
}