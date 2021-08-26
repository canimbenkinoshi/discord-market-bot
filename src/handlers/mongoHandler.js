const mongoose = require("mongoose");
const settings = require("../configs/settings.json");
const client = global.client;

mongoose.connect(settings.mongoUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
  client.logger.log("Connected to DB","cmd");
});

mongoose.connection.on("error", () => {
  client.logger.log("Connection Error!", "error");
});

const { DatabaseManager } = require("@aloshai/mongosha");

DatabaseManager.connect("mongodb+srv://DENEME:DENEME@cluster0.rce0m.mongodb.net/DENEME?retryWrites=true&w=majority")