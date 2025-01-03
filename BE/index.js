const express = require('express')
const app = express()
const mongoose = require('mongoose');

const port = process.env.port || 5000
require('dotenv').config()

async function main() {
    await mongoose.connect(process.env.DB_ULR);
    app.use('/', (req, res) => {
        res.send('Fucking code...')
    })
}
main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})