const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');

const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_ATLAS_URL)
    .then(() => {
        console.log("Connected to MongoDB...");
    }).catch((err) => {
        console.log(err)
    });

app.use(router);

app.listen(PORT, async () => {
    console.log(`Server is up on localhost:${PORT}..`)
})