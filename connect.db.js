import mongoose from "mongoose";

const userName = process.env.DB_USER_NAME;
const password = encodeURIComponent(process.env.DB_PASSWORD);
const databaseName = process.env.DB_NAME;
const dbURL = `mongodb+srv://${userName}:${password}@cluster0.k1ny9ip.mongodb.net/${databaseName}?retryWrites=true&w=majority&appName=Cluster0`;
const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("connection established");
  } catch (error) {
    console.log(error.message);
    console.log("connection failed");
  }
};

export default connectDB;
