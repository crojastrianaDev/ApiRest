const mongoose = require("mongoose");

const URL = "mongodb://localhost/api-torneos";

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("Db is connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;
