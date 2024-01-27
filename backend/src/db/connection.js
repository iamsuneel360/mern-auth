const mongoose = require("mongoose");

const connection = async () => {
  try {
    const isConnected = await mongoose.connect(process.env.MONGO);
    if (isConnected) {
      console.log("DB connected successfully");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = connection;
