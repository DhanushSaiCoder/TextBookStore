const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config();
const path = require('path')
mongoose.connect(`${process.env.MONGO_URI}`)
    .then(console.log('connected to db'))
    .catch((err) => {
        console.error('error connecting db', err)
    })

app.get('/', (req, res) => {
    res.redirect('/home')
})
app.get('/home',(req,res) => {
    res.sendFile(path.join(__dirname, './public/pages/index.html'));
})
app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`)
})