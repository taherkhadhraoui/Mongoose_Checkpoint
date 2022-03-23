const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB is connented");
  } catch (err) {
    console.log("DB isn't connected");
  }
};

module.exports = ConnectDB;
