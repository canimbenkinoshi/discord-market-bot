const mongoose = require("mongoose")

const tes = new mongoose.Schema({
    guild: String,
    user: String,
    test: Number,
})

module.exports = mongoose.model("tes", tes)