const exp = require('constants');
const express = require('express');
const connectDb = require('./models/connecDb');
const app = express();
const db = require('./models/connecDb')
const jobRoutes = require('./routes/jobRoutes')
const authRoutes = require('./routes/authRoutes')
const errorHAndler = require('./middleware/errors');
const errorHandler = require('./middleware/errors');
const PORT = 5000

connectDb()

app.use(express.json())


app.use('/api/v1/jobs', jobRoutes)
app.use('/api/v1/auth', authRoutes)

// function routes(route){
//     app.use('/api/v1/', route) 
// }

// routes(authRoutes)
// routes(jobRoutes)

app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})