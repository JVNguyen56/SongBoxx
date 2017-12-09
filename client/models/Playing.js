const mongoose = require("mongoose"),
Schema = mongoose.Schema;

let PlayingSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    source: {
        type: String,
        required: false
    },
    thumbnail: {
        type: String,
        required: false
    }
})

let Playing = mongoose.model("Current", PlayingSchema)

module.exports = Playing