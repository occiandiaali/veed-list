const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    listedOn: {
        type: Date,
        default: Date.now
    },
    sellerName: {
        type: String
    },
    askingPrice: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Post", PostSchema);