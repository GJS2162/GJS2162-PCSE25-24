const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb://admin:secret@localhost:27019/todoListDB?authSource=admin",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("✅ Connected to local MongoDB (Docker container) — todoListDB");
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error);
  }
}

module.exports = connectDB;
