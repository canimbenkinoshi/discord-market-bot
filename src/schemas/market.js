const mongoose = require("mongoose")

const market = new mongoose.Schema({
    guild: String,
    name: String,
    price: {type: Number, default: 0},
    desc: String
})

module.exports = mongoose.model("market", market)