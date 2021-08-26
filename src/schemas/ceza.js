const mongoose = require("mongoose")

const cezalar = new mongoose.Schema({
    ID: Number,
    user: String,
    guild: String,
    ihlal: Number,
    yetkili: String,
    ceza: String,
    tarih: String,
    bitiş: String,
    cezalımı: String,
    sebep: String,
    kaldıran: String,
    kalkmaz: String
})

module.exports = mongoose.model("cezalar", cezalar)