const exp = require('constants');
const express = require('express');
const connectDb = require('./models/connecDb');
const app = express();
const db = require('./models/connecDb')
const routes = require('./routes/jobRoutes')
const PORT = 5000

connectDb()

app.use(express.json())

app.use('/api/v1/', routes)


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})