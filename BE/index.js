const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose');
const port = process.env.port || 5000
require('dotenv').config()

// middleware
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
}))

// routes
const bookRoutes = require('./src/books/book_router')
app.use("/api/books", bookRoutes)

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