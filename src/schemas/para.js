const mongoose = require("mongoose")

const para = new mongoose.Schema({
    guild: String,
    user: String,
    para: { type: Number, default: 0 },
})

module.exports = mongoose.model("para", para)