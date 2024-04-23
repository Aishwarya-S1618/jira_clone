import mongoose from "mongoose";

const DATABASE_URL = process.env.MONGO_DB_CONNECT_URL;

async function connectDB() {
  mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(`MongoDB Connection Error: ${err.message}`));
}

export default connectDB;