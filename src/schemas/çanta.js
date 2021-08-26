const mongoose = require("mongoose")

const çanta = new mongoose.Schema({
    guild: String,
    user: String,
    name: String,
    para: {type: Number, default: 0},
    tane: {type: Number, default: 0},
    price:{type: Number, default: 0},
    desc: String
})

module.exports = mongoose.model("çanta", çanta)