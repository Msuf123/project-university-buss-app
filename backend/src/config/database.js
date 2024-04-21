require("dotenv").config();
const { mongoose } = require("mongoose");

const connectToMongo = async () => {
  try {
    const URI = 'mongodb://127.0.0.1:27017';
    await mongoose.connect(URI, { dbName: "reserve" });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);

    process.exit(1);
  }
};

module.exports = connectToMongo;
