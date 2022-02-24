const {getAllJobs, postNewJob, updateJob, deleteJob, getSingleJob} = require('../controllers/jobControllers')
const express = require('express')
const router = express.Router()



router.route('/').get(getAllJobs).post(postNewJob)
router.route('/:id').get(getSingleJob).delete(deleteJob).put(updateJob)

module.exports = router