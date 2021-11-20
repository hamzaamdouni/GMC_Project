const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(mongodb+srv://hamzaamdouni:gomycode123456hamza@cluster0.6z1ug.mongodb.net/ProjectGMC?retryWrites=true&w=majority);
    console.log("database is connected");
  } catch (error) {
    console.log("database is not connected", error);
  }
};

module.exports = connectDB;

// DB_URI=mongodb+srv://hamzaamdouni:gomycode123456hamza@cluster0.6z1ug.mongodb.net/ProjectGMC?retryWrites=true&w=majority
