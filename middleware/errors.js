const errorHandler = (err, req, res, next) => {
    console.log(err)

    res.status(500).json({
        success: false,
        error: err.message
    });
};


module.exports = errorHandler